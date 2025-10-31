import React, { useEffect, useState } from "react";
import './MaintenancePage.css';
// FlipDigit component with animation
function FlipDigit({ value }) {
  const [prevValue, setPrevValue] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
      setPrevValue(value);
    }
  }, [value, prevValue]);

  return (
    <div className="flip-container">
      <div className={`flip-digit ${animate ? "animate" : ""}`}>
        {String(value).padStart(2, "0")}
      </div>
    </div>
  );
}

// Main MaintenancePage
function MaintenancePage({ targetTime }) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetTime - now;

      if (diff <= 0) {
        setCompleted(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white font-mono">
      <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">🚧 Maintenance Mode</h1>
      {completed ? (
        <h2 className="text-2xl font-semibold animate-fadeInUp animate-delay-300">
          ✅ Maintenance selesai!
        </h2>
      ) : (
        <div className="flex gap-4 animate-fadeInUp animate-delay-300">
          <FlipDigit value={timeLeft.hours} />
          <FlipDigit value={timeLeft.minutes} />
          <FlipDigit value={timeLeft.seconds} />
        </div>
      )}
    </div>
  );
}

export default MaintenancePage;