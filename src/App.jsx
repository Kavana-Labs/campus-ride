import { BottomNav } from './components/BottomNav'
import { Fab } from './components/Fab'
import { TopBar } from './components/TopBar'
import { useAppStore } from './state/appStore'
import { Landing } from './pages/Landing'
import { Home } from './pages/Home'
import { RequestForm } from './pages/RequestForm'
import { FindingRider } from './pages/FindingRider'
import { RiderAssigned } from './pages/RiderAssigned'
import { RiderDashboard } from './pages/RiderDashboard'
import { RiderRequestDetails } from './pages/RiderRequestDetails'
import { AdminDashboard } from './pages/AdminDashboard'
import { InstallBanner } from './components/InstallBanner'
import { useInstallPrompt } from './hooks/useInstallPrompt'

function App() {
  const { activePage, setActivePage, location } = useAppStore()
  const { canInstall, promptInstall } = useInstallPrompt()

  const renderPage = () => {
    switch (activePage) {
      case 'landing':
        return <Landing onGetStarted={() => setActivePage('home')} />
      case 'home':
        return <Home />
      case 'form':
        return <RequestForm />
      case 'finding':
        return <FindingRider />
      case 'assigned':
        return <RiderAssigned />
      case 'rider':
        return <RiderDashboard onOpenRequest={() => setActivePage('rider-detail')} />
      case 'rider-detail':
        return <RiderRequestDetails />
      case 'admin':
      default:
        return <AdminDashboard />
    }
  }

  const navActive =
    activePage === 'home'
      ? 'home'
      : ['form', 'finding', 'assigned'].includes(activePage)
        ? 'request'
        : ['rider', 'rider-detail'].includes(activePage)
          ? 'rider'
          : 'admin'

  return (
    <div className="relative min-h-screen bg-bg-soft pb-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pt-6 lg:px-8 lg:pt-10">
        {activePage !== 'landing' && (
          <TopBar location={location} onLocationClick={() => setActivePage('home')} />
        )}
        {renderPage()}
      </div>

      {activePage !== 'landing' && (
        <>
          <Fab onClick={() => setActivePage('form')} className="md:hidden" />
          <BottomNav
            active={navActive}
            className="md:hidden"
            onSelect={(id) => {
              if (id === 'home') setActivePage('home')
              if (id === 'request') setActivePage('form')
              if (id === 'rider') setActivePage('rider')
              if (id === 'admin') setActivePage('admin')
            }}
          />
          <InstallBanner visible={canInstall} onInstall={promptInstall} />
        </>
      )}
    </div>
  )
}

export default App
