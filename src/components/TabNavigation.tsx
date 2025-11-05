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
      className="fixed bottom-3 left-0 right-0 z-50 flex justify-center"
      role="tablist"
      aria-label="Portfolio navigation dock"
    >
      <div className="flex items-center gap-1 bg-white/80 backdrop-blur border border-gray-200 rounded-2xl px-2 py-2 shadow-lg">
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
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary ${isActive ? 'text-primary bg-primary/10 shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Icon size={20} />
              <span className="text-[11px] font-body hidden sm:block">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
