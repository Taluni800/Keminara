import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li className="sidebar-item active">Dashboard</li>
          <li className="sidebar-item">Projects</li>
          <li className="sidebar-item">Tasks</li>
          <li className="sidebar-item">Analytics</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
