import { Home, User, Briefcase, FolderOpen, Mail, MessageCircle } from 'lucide-react';
import { TabKey } from '../hooks/useHashRouter';

interface TabNavigationProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const tabs = [
  { key: 'home' as TabKey, label: 'Home', icon: Home },
  { key: 'profile' as TabKey, label: 'Profile', icon: User },
  { key: 'experience' as TabKey, label: 'Experience', icon: Briefcase },
  { key: 'projects' as TabKey, label: 'Projects', icon: FolderOpen },
  { key: 'contact' as TabKey, label: 'Contact', icon: Mail },
  { key: 'testimoni' as TabKey, label: 'Testimoni', icon: MessageCircle },
];

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-t border-white/10 shadow-lg"
      role="tablist"
      aria-label="Portfolio navigation"
    >
      <div className="max-w-7xl mx-auto w-full px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-around sm:justify-center gap-1 sm:gap-2 md:gap-3 py-2.5 sm:py-3 md:py-4">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              id={`tab-${tab.key}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.key}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onTabChange(tab.key)}
              title={`Open ${tab.label} (Ctrl+${index + 1} / Alt+${index + 1})`}
              className={`flex flex-col items-center justify-center gap-0.5 sm:gap-1 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent min-w-0 flex-1 sm:flex-none ${
                isActive 
                  ? 'text-accent bg-white/20 shadow-lg' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="text-[9px] sm:text-[10px] md:text-xs font-body whitespace-nowrap overflow-hidden text-ellipsis max-w-full">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
