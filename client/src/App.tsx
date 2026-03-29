import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppContent from './components/AppContent/AppContent';

function App() {
  return (
    <div className="layout">
      <header className="topbar"> <Topbar /> </header>
      <div className="content">
        <aside className="sidebar"> <Sidebar /></aside>
        <main className="app-content"> <AppContent /> </main>
      </div>
    </div>
  )
}

export default App
