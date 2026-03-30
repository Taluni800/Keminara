import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import AppContent from './components/AppContent/AppContent';

function App() {
  return (
    <div className="layout">
      <Topbar />
      <div className="content">
        <Sidebar />
        <AppContent />
      </div>
    </div>
  )
}

export default App
