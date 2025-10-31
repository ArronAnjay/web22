import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;