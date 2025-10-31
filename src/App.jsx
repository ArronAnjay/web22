import React, { useState, useEffect, useRef } from "react";
import { CONFIG } from "./config";
import MaintenancePage from "./maintenance/MaintenancePage";
import HomePage from "./Pages/HomePage";

function App() {
  const [currentPage, setCurrentPage] = useState("loading");
  const [videoReady, setVideoReady] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [audioFailed, setAudioFailed] = useState(false);
  const videoRef = useRef(null);

  // ⏳ Startup logic
  useEffect(() => {
    const introPlayed = localStorage.getItem("introPlayed");

    if (CONFIG.enableMaintenance) {
      setCurrentPage("maintenance");
    } else if (CONFIG.enableIntroVideo && !introPlayed) {
      setCurrentPage("intro");
    } else {
      setCurrentPage("home");
    }
  }, []);

  // ▶️ Play video once
  useEffect(() => {
    if (videoReady && !hasPlayed && videoRef.current) {
      const video = videoRef.current;
      video.muted = false;
      video.volume = 1;

      video.play()
        .then(() => setHasPlayed(true))
        .catch(() => {
          video.muted = true;
          video.play().then(() => {
            setHasPlayed(true);
            setAudioFailed(true);
          });
        });
    }
  }, [videoReady, hasPlayed]);

  const handleEnableAudio = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      video.play().then(() => setAudioFailed(false));
    }
  };

  // 🧭 Routing
  if (currentPage === "loading") return null;

  if (currentPage === "maintenance") {
    return <MaintenancePage />;
  }

  if (currentPage === "intro") {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 9999,
      }}>
        {audioFailed && (
          <button
            onClick={handleEnableAudio}
            style={{
              position: "absolute",
              bottom: "5%",
              right: "5%",
              padding: "1rem 1.5rem",
              fontSize: "1rem",
              backgroundColor: "#ffffff22",
              color: "#000",
              border: "1px solid #000",
              borderRadius: "8px",
              backdropFilter: "blur(6px)",
              cursor: "pointer",
              zIndex: 10000,
              boxShadow: "0 0 12px rgba(255,255,255,0.6)",
            }}
          >
            🔊 Aktifkan Audio
          </button>
        )}
        <video
          ref={videoRef}
          src="/vidio3.mp4"
          muted
          playsInline
          controls={false}
          onLoadedData={() => setVideoReady(true)}
          onEnded={() => {
            localStorage.setItem("introPlayed", "true");
            setCurrentPage("home");
          }}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            pointerEvents: "none",
            opacity: videoReady ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </div>
    );
  }

  if (currentPage === "home") {
    return <HomePage />;
  }

  return null;
}

export default App;