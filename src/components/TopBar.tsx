import { useEffect, useState } from 'react';

export const TopBar = () => {
  const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 h-12 sm:h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent animate-pulse flex-shrink-0"></div>
          <h1 className="font-heading font-bold text-xs sm:text-sm md:text-base lg:text-lg text-white truncate">Randy Hendriyawan</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 text-white/70">
          <div className="text-xs sm:text-sm font-body">{time}</div>
        </div>
      </div>
    </header>
  );
};
