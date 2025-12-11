import { ReactNode } from 'react';

interface WindowFrameProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const WindowFrame = ({ title, icon, children }: WindowFrameProps) => {
  return (
    <section className="mx-auto mt-3 sm:mt-4 lg:mt-6 max-w-6xl w-full bg-white/80 backdrop-blur shadow-xl rounded-lg sm:rounded-xl border border-gray-200 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between h-9 sm:h-10 px-3 sm:px-4 bg-gray-50/80 border-b border-gray-200">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          {/* Window controls (Linux style) */}
          <div className="flex items-center gap-1 sm:gap-1.5 mr-1.5 sm:mr-2">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 rounded-full bg-red-400 border border-red-500/40" aria-hidden />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 rounded-full bg-yellow-400 border border-yellow-500/40" aria-hidden />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-3.5 md:w-3.5 rounded-full bg-green-400 border border-green-500/40" aria-hidden />
          </div>
          {icon}
          <span className="font-body text-xs sm:text-sm text-gray-700 truncate">{title}</span>
        </div>
        <div className="text-[10px] sm:text-xs text-gray-400 pr-0.5 sm:pr-1 flex-shrink-0">Portfolio</div>
      </div>

      {/* Content */}
      <div
        className="min-h-[50vh] max-h-[calc(100vh-12rem)] sm:max-h-[calc(100vh-11rem)] md:max-h-[calc(100vh-10rem)] overflow-y-auto overscroll-contain p-4 sm:p-5 md:p-6 lg:p-8"
      >
        {children}
      </div>
    </section>
  );
};
