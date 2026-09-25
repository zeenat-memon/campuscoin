import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        <header className="admin-header">
          <div>
            <h2>Admin Panel</h2>
            <p>CampusCoin Administration</p>
          </div>

          <div className="admin-user">
            <div className="admin-avatar">A</div>
            <div>
              <strong>Administrator</strong>
              <span>Admin</span>
            </div>
          </div>
        </header>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;