function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      {/* Page Heading */}
      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to the CampusCoin Administration Panel.</p>
        </div>

        <div className="dashboard-date">
          📅 Current Overview
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="admin-stats-grid">

        {/* Active Users */}
        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon users-icon">
              👥
            </div>

            <span className="stat-label">
              Users
            </span>
          </div>

          <h2>0</h2>
          <p>Active Users</p>
        </div>

        {/* Transactions */}
        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon transaction-icon">
              💳
            </div>

            <span className="stat-label">
              Transactions
            </span>
          </div>

          <h2>0</h2>
          <p>Total Transactions</p>
        </div>

        {/* Categories */}
        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon category-icon">
              📁
            </div>

            <span className="stat-label">
              Categories
            </span>
          </div>

          <h2>0</h2>
          <p>System Categories</p>
        </div>

        {/* Reports */}
        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon report-icon">
              📊
            </div>

            <span className="stat-label">
              Reports
            </span>
          </div>

          <h2>0</h2>
          <p>System Reports</p>
        </div>

      </div>

      {/* Dashboard Content */}
      <div className="admin-dashboard-grid">

        {/* Usage Overview */}
        <div className="admin-panel-card">

          <div className="panel-header">
            <div>
              <h3>System Usage Overview</h3>
              <p>Monitor CampusCoin activity</p>
            </div>

            <span className="panel-badge">
              Overview
            </span>
          </div>

          <div className="usage-list">

            <div className="usage-item">
              <div className="usage-info">
                <span>Active Users</span>
                <strong>0</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="usage-item">
              <div className="usage-info">
                <span>Transactions Logged</span>
                <strong>0</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <div className="usage-item">
              <div className="usage-info">
                <span>Categories Used</span>
                <strong>0</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="admin-panel-card">

          <div className="panel-header">
            <div>
              <h3>Quick Actions</h3>
              <p>Manage your system</p>
            </div>
          </div>

          <div className="quick-actions">

            <a
              href="/admin/users"
              className="quick-action"
            >
              <span className="quick-action-icon">
                👥
              </span>

              <div>
                <strong>Manage Users</strong>
                <small>
                  View and manage user accounts
                </small>
              </div>

              <span className="arrow">
                →
              </span>
            </a>

            <a
              href="/admin/transactions"
              className="quick-action"
            >
              <span className="quick-action-icon">
                💳
              </span>

              <div>
                <strong>View Transactions</strong>
                <small>
                  Monitor logged transactions
                </small>
              </div>

              <span className="arrow">
                →
              </span>
            </a>

            <a
              href="/admin/reports"
              className="quick-action"
            >
              <span className="quick-action-icon">
                📈
              </span>

              <div>
                <strong>View Reports</strong>
                <small>
                  Check system usage reports
                </small>
              </div>

              <span className="arrow">
                →
              </span>
            </a>

          </div>

        </div>

      </div>

      {/* Recent Activity */}
      <div className="admin-panel-card recent-activity">

        <div className="panel-header">
          <div>
            <h3>Recent Activity</h3>
            <p>Latest activity in CampusCoin</p>
          </div>
        </div>

        <div className="empty-activity">

          <div className="empty-icon">
            📋
          </div>

          <h4>No Recent Activity</h4>

          <p>
            System activity will appear here once users
            start using CampusCoin.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;