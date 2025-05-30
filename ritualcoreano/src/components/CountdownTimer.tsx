
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 horas em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (timeLeft <= 0) {
    return (
      <div className="text-red-600 font-bold text-xl">
        ⏰ Oferta Expirada!
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-red-700 font-bold">⏰</span>
      <span className="text-2xl font-mono font-bold text-red-600 bg-white px-4 py-2 rounded-lg shadow-lg">
        {formatTime(timeLeft)}
      </span>
    </div>
  );
};

export default CountdownTimer;
