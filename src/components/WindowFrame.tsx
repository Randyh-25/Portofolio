import { ReactNode } from 'react';

interface WindowFrameProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export const WindowFrame = ({ title, icon, children }: WindowFrameProps) => {
  return (
    <section className="mx-auto mt-4 lg:mt-6 max-w-6xl w-[95%] lg:w-[92%] bg-white/80 backdrop-blur shadow-xl rounded-xl border border-gray-200 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between h-10 px-3 bg-gray-50/80 border-b border-gray-200">
        <div className="flex items-center gap-2">
          {/* Window controls (Linux style) */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="h-3.5 w-3.5 rounded-full bg-red-400 border border-red-500/40" aria-hidden />
            <span className="h-3.5 w-3.5 rounded-full bg-yellow-400 border border-yellow-500/40" aria-hidden />
            <span className="h-3.5 w-3.5 rounded-full bg-green-400 border border-green-500/40" aria-hidden />
          </div>
          {icon}
          <span className="font-body text-sm text-gray-700">{title}</span>
        </div>
        <div className="text-xs text-gray-400 pr-1">Portfolio</div>
      </div>

      {/* Content */}
      <div
        className="min-h-[60vh] max-h-[calc(100vh-11rem)] md:max-h-[calc(100vh-10rem)] overflow-y-auto overscroll-contain p-4 md:p-6"
      >
        {children}
      </div>
    </section>
  );
};
