import { useState, useEffect } from 'react';

export type TabKey = 'home' | 'profile' | 'experience' | 'projects' | 'contact';

export const useHashRouter = () => {
  const getTabFromHash = (): TabKey => {
    const hash = window.location.hash.slice(1);
    const validTabs: TabKey[] = ['home', 'profile', 'experience', 'projects', 'contact'];
    return validTabs.includes(hash as TabKey) ? (hash as TabKey) : 'home';
  };

  const [activeTab, setActiveTab] = useState<TabKey>(getTabFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToTab = (tab: TabKey) => {
    window.location.hash = tab;
  };

  return { activeTab, navigateToTab };
};
