function Sidebar(){
  return(
    <aside className="sidebar">
        <h2>Minibot<span>.</span></h2>
        <p className="menu-label">Control</p>
        <div className="menu-item active">
          <span>◈</span> Dashboard
        </div>

        <div className="menu-item">
          <span>◎</span> RoboEyes
        </div>
        <div className="menu-item">
          <span>⚙</span> Configuracion
        </div>

        <div className="sidebar-footer">
          <span className="status-dot"></span>
          Modo de simulacion
        </div>
      </aside>
  );
}

export default Sidebar;