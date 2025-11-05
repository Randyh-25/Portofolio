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
    <header className="sticky top-0 z-40 w-full">
      <div className="h-10 w-full bg-white/70 backdrop-blur border-b border-gray-200 flex items-center justify-between px-3 lg:px-6">
        <div className="flex items-center gap-3 text-sm font-body">
          <span className="font-semibold text-brand">Activities</span>
          <span className="hidden sm:inline text-gray-500">•</span>
          <span className="hidden sm:inline text-gray-600">Portfolio</span>
        </div>
        <div className="hidden md:block text-sm font-heading font-semibold text-brand select-none">{time}</div>
        <div className="hidden md:flex items-center gap-3 text-gray-600">
          <Wifi size={16} />
          <Volume2 size={16} />
          <Battery size={16} />
        </div>
      </div>
    </header>
  );
};
