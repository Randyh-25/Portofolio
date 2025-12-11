import { useEffect, useState } from 'react';
import { Wifi, Battery, Volume2 } from 'lucide-react';

export const TopBar = () => {
  const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent animate-pulse"></div>
          <h1 className="font-heading font-bold text-sm sm:text-lg text-white truncate">Randy Hendriyawan</h1>
        </div>
        <div className="hidden md:flex items-center gap-4 text-white/70">
          <div className="text-xs sm:text-sm font-body">{time}</div>
        </div>
      </div>
    </header>
  );
};
