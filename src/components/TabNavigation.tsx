import { Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
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
];

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-t border-white/10"
      role="tablist"
      aria-label="Portfolio navigation"
    >
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-6 lg:px-8 flex items-center justify-center gap-1 sm:gap-3 py-3 sm:py-4">
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
              className={`flex flex-col items-center justify-center gap-1 px-2 sm:px-4 py-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                isActive 
                  ? 'text-accent bg-white/20 shadow-lg' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon size={20} className="sm:w-6 sm:h-6" />
              <span className="text-[10px] sm:text-xs font-body">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
