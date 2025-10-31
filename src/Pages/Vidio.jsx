import React, { useEffect, useState } from 'react';
import './vidio.css';

const SplitScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // 📱 Versi Mobile
    return (
      <div className="mobile-screen">
        <img src="/vidio.gif" alt="VIDIO" className="mobile-gif" />
        <div className="mobile-content">
          <h2>X RPL</h2>
          <p>Rumahnya para pengembang masa depan.
Kami adalah sekumpulan pelajar dengan semangat coding, kreativitas, dan kebersamaan.
</p>
          <p>- Di sini, setiap baris kode bercerita.  
          Setiap tawa menjadi energi.  
          Kami bukan hanya kelas,kami adalah keluarga.  
          Selamat datang di cerita kami.</p>
        </div>
      </div>
    );
  }

  // 💻 Versi Desktop
  return (
    <div className="split-screen">
      <div className="left-section">
        <h1>X RPL</h1>
        <p>
          Rumahnya para pengembang masa depan.  
          Kami adalah sekumpulan pelajar dengan semangat coding, kreativitas, dan kebersamaan.
        </p>
        <p>
          - Di sini, setiap baris kode bercerita.  
          Setiap tawa menjadi energi.  
          Kami bukan hanya kelas,kami adalah keluarga.  
          Selamat datang di cerita kami.
        </p>
      </div>
      <div className="right-section">
        <img src="/vidio.gif" alt="VIDIO" className="background-gif" />
      </div>
    </div>
  );
};

export default SplitScreen;