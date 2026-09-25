import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="admin-sidebar">

      {/* Logo */}
      <div className="admin-sidebar-logo">
        <h2>
          Campus<span>Coin</span>
        </h2>
        <p>ADMIN PANEL</p>
      </div>

      {/* Navigation */}
      <nav className="admin-sidebar-nav">

        <p className="admin-sidebar-title">
          MAIN MENU
        </p>

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link active"
              : "admin-sidebar-link"
          }
        >
          <span>📊</span>
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link active"
              : "admin-sidebar-link"
          }
        >
          <span>👥</span>
          <span>Manage Users</span>
        </NavLink>

        <NavLink
          to="/admin/transactions"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link active"
              : "admin-sidebar-link"
          }
        >
          <span>💳</span>
          <span>Transactions</span>
        </NavLink>

        <NavLink
          to="/admin/reports"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link active"
              : "admin-sidebar-link"
          }
        >
          <span>📈</span>
          <span>Reports</span>
        </NavLink>

        <p className="admin-sidebar-title">
          SYSTEM
        </p>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive
              ? "admin-sidebar-link active"
              : "admin-sidebar-link"
          }
        >
          <span>⚙️</span>
          <span>Settings</span>
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="admin-sidebar-bottom">
        <button
          className="admin-logout-btn"
          onClick={handleLogout}
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;