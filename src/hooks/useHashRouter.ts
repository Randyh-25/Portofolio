import { useState, useEffect } from 'react';

export type TabKey = 'home' | 'profile' | 'experience' | 'projects' | 'contact' | 'review';

const validTabs: TabKey[] = ['home', 'profile', 'experience', 'projects', 'contact', 'review'];

const getTabFromPath = (): TabKey => {
  const path = window.location.pathname;
  // Remove leading slash and convert to TabKey
  const tab = path.replace(/^\//, '') || 'home';
  return validTabs.includes(tab as TabKey) ? (tab as TabKey) : 'home';
};

export const useHashRouter = () => {
  const [activeTab, setActiveTab] = useState<TabKey>(getTabFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setActiveTab(getTabFromPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToTab = (tab: TabKey) => {
    if (tab !== activeTab) {
      window.history.pushState(null, '', `/${tab}`);
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { activeTab, navigateToTab };
};
