import { useHashRouter } from './hooks/useHashRouter';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { TabNavigation } from './components/TabNavigation';
import { HomeTab } from './components/tabs/HomeTab';
import { ProfileTab } from './components/tabs/ProfileTab';
import { ExperienceTab } from './components/tabs/ExperienceTab';
import { ProjectsTab } from './components/tabs/ProjectsTab2';
import { ContactTab } from './components/tabs/ContactTab';
import { TestimoniTab } from './components/tabs/TestimoniTab';
import portfolioData from './data/portfolioData.json';
import { TopBar } from './components/TopBar';

function App() {
  const { activeTab, navigateToTab } = useHashRouter();
  useKeyboardShortcuts(activeTab, navigateToTab);

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <TopBar />

      <main className="flex-1 pb-24 sm:pb-28 md:pb-32 px-3 sm:px-4 md:px-6">
        <div key={activeTab} className="w-full max-w-7xl mx-auto">
          {activeTab === 'home' && (
            <HomeTab
              profile={{
                name: portfolioData.profile.name,
                role: portfolioData.profile.role,
                tagline: portfolioData.profile.tagline,
                avatar: portfolioData.profile.avatar,
              }}
              links={portfolioData.profile.links}
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

          {activeTab === 'review' && (
            <TestimoniTab />
          )}
        </div>
      </main>

      <TabNavigation activeTab={activeTab} onTabChange={navigateToTab} />
    </div>
  );
}

export default App;
