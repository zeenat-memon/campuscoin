function Reports() {
  return (
    <div className="admin-page">

      {/* Page Header */}
      <div className="page-heading">
        <div>
          <h1>Reports</h1>
          <p>
            Monitor CampusCoin system usage and activity.
          </p>
        </div>

        <div className="dashboard-date">
          📈 System Reports
        </div>
      </div>

      {/* Report Statistics */}
      <div className="admin-stats-grid">

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

        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon transaction-icon">
              💳
            </div>

            <span className="stat-label">
              Activity
            </span>
          </div>

          <h2>0</h2>
          <p>Total Transactions</p>
        </div>

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
          <p>Most Used Categories</p>
        </div>

      </div>

      {/* Usage Statistics */}
      <div className="admin-dashboard-grid">

        {/* Active Users */}
        <div className="admin-panel-card">

          <div className="panel-header">
            <div>
              <h3>Active Users</h3>
              <p>
                Current system users
              </p>
            </div>

            <span className="panel-badge">
              Users
            </span>
          </div>

          <div className="report-empty">

            <div className="empty-icon">
              👥
            </div>

            <h4>No User Data Available</h4>

            <p>
              User statistics will appear here
              after the database is connected.
            </p>

          </div>

        </div>

        {/* Transaction Activity */}
        <div className="admin-panel-card">

          <div className="panel-header">
            <div>
              <h3>Transaction Activity</h3>
              <p>
                System transaction overview
              </p>
            </div>

            <span className="panel-badge">
              Transactions
            </span>
          </div>

          <div className="report-empty">

            <div className="empty-icon">
              💳
            </div>

            <h4>No Transaction Data Available</h4>

            <p>
              Transaction statistics will appear
              here after API integration.
            </p>

          </div>

        </div>

      </div>

      {/* Most Used Categories */}
      <div className="admin-panel-card">

        <div className="panel-header">
          <div>
            <h3>Most Used Categories</h3>
            <p>
              Categories most frequently used by students
            </p>
          </div>

          <span className="panel-badge">
            Categories
          </span>
        </div>

        <div className="category-report">

          <div className="category-report-item">
            <div className="category-report-icon">
              🍔
            </div>

            <div className="category-report-info">
              <strong>Food</strong>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <span>0</span>
          </div>

          <div className="category-report-item">
            <div className="category-report-icon">
              🚌
            </div>

            <div className="category-report-info">
              <strong>Transport</strong>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <span>0</span>
          </div>

          <div className="category-report-item">
            <div className="category-report-icon">
              📚
            </div>

            <div className="category-report-info">
              <strong>Academics</strong>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <span>0</span>
          </div>

          <div className="category-report-item">
            <div className="category-report-icon">
              🎬
            </div>

            <div className="category-report-info">
              <strong>Entertainment</strong>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>

            <span>0</span>
          </div>

        </div>

      </div>

      {/* Report Note */}
      <div className="admin-info-box">

        <div className="info-box-icon">
          💡
        </div>

        <div>
          <h4>Report Information</h4>

          <p>
            These reports will display live system
            statistics once the Admin Panel is connected
            to the CampusCoin PHP and MySQL backend.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Reports;