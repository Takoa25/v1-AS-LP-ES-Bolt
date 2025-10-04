import { useEffect, useState } from 'react';

export default function Navbar() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const savedTime = localStorage.getItem('countdownEndTime');
    const now = Date.now();

    if (savedTime) {
      const endTime = parseInt(savedTime);
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
      setTimeLeft(remaining);
    } else {
      const endTime = now + (15 * 60 * 1000);
      localStorage.setItem('countdownEndTime', endTime.toString());
    }

    const interval = setInterval(() => {
      const savedTime = localStorage.getItem('countdownEndTime');
      if (savedTime) {
        const endTime = parseInt(savedTime);
        const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
        setTimeLeft(remaining);

        if (remaining <= 5 * 60) {
          setIsPulsing(true);
        }

        if (remaining === 0) {
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold">
              <span className="text-[#7C3AED]">Astrologic</span>
              <span className="text-[#DC2626]">SECRETS</span>
            </h1>
          </div>

          <div className="flex items-center">
            <div className={`text-[#DC2626] font-bold text-lg sm:text-xl ${isPulsing ? 'animate-pulse' : ''}`}>
              {minutes}:{seconds.toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
