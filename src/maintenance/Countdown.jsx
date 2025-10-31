import React, { useEffect, useState } from 'react';
import './MaintenancePage.css';

const FlipDigit = ({ value }) => {
  const [prev, setPrev] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
      setPrev(value);
    }
  }, [value, prev]);

  return (
    <div className="flip-container">
      <div className={`flip-digit ${animate ? 'animate' : ''}`}>
        {String(value).padStart(2, '0')}
      </div>
    </div>
  );
};

const Countdown = ({ targetDate, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate);
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setExpired(true);
        onExpire?.();
      } else {
        setTimeLeft({
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, onExpire]);

  if (expired) return null;

  return (
    <div className="countdown-wrapper animate-fadeInUp">
      <FlipDigit value={timeLeft.hours} />
      <FlipDigit value={timeLeft.minutes} />
      <FlipDigit value={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;