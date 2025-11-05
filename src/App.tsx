import { useHashRouter } from './hooks/useHashRouter';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { TabNavigation } from './components/TabNavigation';
import { HomeTab } from './components/tabs/HomeTab';
import { ProfileTab } from './components/tabs/ProfileTab';
import { ExperienceTab } from './components/tabs/ExperienceTab';
import { ProjectsTab } from './components/tabs/ProjectsTab2';
import { ContactTab } from './components/tabs/ContactTab';
import portfolioData from './data/portfolioData.json';
import { TopBar } from './components/TopBar';
import { WindowFrame } from './components/WindowFrame';

function App() {
  const { activeTab, navigateToTab } = useHashRouter();
  useKeyboardShortcuts(activeTab, navigateToTab);

  return (
    <div className="relative h-full flex flex-col overflow-hidden bg-gradient-to-br from-surface via-white to-surface">
      <TopBar />
      {/* Decorative gradient wallpaper */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />
      </div>

  <main className="flex-1 pb-24 overflow-hidden">
        <WindowFrame
          title={
            activeTab === 'home' ? 'Home' :
            activeTab === 'profile' ? 'Profile' :
            activeTab === 'experience' ? 'Experience' :
            activeTab === 'projects' ? 'Projects' :
            'Contact'
          }
          icon={null}
        >
        {activeTab === 'home' && (
          <HomeTab
            profile={{
              name: portfolioData.profile.name,
              role: portfolioData.profile.role,
              tagline: portfolioData.profile.tagline,
              avatar: portfolioData.profile.avatar,
            }}
            onNavigateToProfile={() => navigateToTab('profile')}
          />
        )}

        {activeTab === 'profile' && (
          <ProfileTab
            profile={{
              bio: portfolioData.profile.bio,
              education: portfolioData.profile.education,
              softSkills: portfolioData.profile.softSkills,
              technicalSkills: portfolioData.profile.technicalSkills,
            }}
            onNavigateToExperience={() => navigateToTab('experience')}
          />
        )}

        {activeTab === 'experience' && (
          <ExperienceTab experiences={portfolioData.experience} />
        )}

        {activeTab === 'projects' && (
          <ProjectsTab projects={portfolioData.projects} />
        )}

        {activeTab === 'contact' && (
          <ContactTab links={portfolioData.profile.links} />
        )}
        </WindowFrame>
      </main>

      {/* Bottom dock */}
      <TabNavigation activeTab={activeTab} onTabChange={navigateToTab} />
    </div>
  );
}

export default App;
