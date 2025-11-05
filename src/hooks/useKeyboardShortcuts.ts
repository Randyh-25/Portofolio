import { useEffect } from 'react';
import { TabKey } from './useHashRouter';

const TAB_KEYS: TabKey[] = ['home', 'profile', 'experience', 'projects', 'contact'];

export const useKeyboardShortcuts = (
  activeTab: TabKey,
  navigateToTab: (tab: TabKey) => void
) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 5) {
          e.preventDefault();
          navigateToTab(TAB_KEYS[num - 1]);
        }
      }

      if (e.key === 'ArrowLeft' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const currentIndex = TAB_KEYS.indexOf(activeTab);
        if (currentIndex > 0) {
          e.preventDefault();
          navigateToTab(TAB_KEYS[currentIndex - 1]);
        }
      }

      if (e.key === 'ArrowRight' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const currentIndex = TAB_KEYS.indexOf(activeTab);
        if (currentIndex < TAB_KEYS.length - 1) {
          e.preventDefault();
          navigateToTab(TAB_KEYS[currentIndex + 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, navigateToTab]);
};
