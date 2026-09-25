import { useState } from "react";

function AdminSettings() {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    maintenanceMode: false,
  });

  const handleToggle = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  return (
    <div className="admin-page">

      {/* Page Header */}
      <div className="page-heading">
        <div>
          <h1>Admin Settings</h1>
          <p>
            Manage CampusCoin administration settings.
          </p>
        </div>

        <div className="dashboard-date">
          ⚙️ System Settings
        </div>
      </div>

      {/* Settings Cards */}
      <div className="admin-settings-grid">

        {/* Notifications */}
        <div className="admin-panel-card settings-card">

          <div className="settings-card-header">
            <div className="settings-icon">
              🔔
            </div>

            <div>
              <h3>Notifications</h3>
              <p>
                Manage system notifications.
              </p>
            </div>
          </div>

          <div className="setting-row">

            <div>
              <strong>In-App Notifications</strong>
              <span>
                Allow system notifications for users.
              </span>
            </div>

            <button
              className={
                settings.notifications
                  ? "toggle active"
                  : "toggle"
              }
              onClick={() =>
                handleToggle("notifications")
              }
            >
              <span></span>
            </button>

          </div>

          <div className="setting-row">

            <div>
              <strong>Email Alerts</strong>
              <span>
                Enable important system email alerts.
              </span>
            </div>

            <button
              className={
                settings.emailAlerts
                  ? "toggle active"
                  : "toggle"
              }
              onClick={() =>
                handleToggle("emailAlerts")
              }
            >
              <span></span>
            </button>

          </div>

        </div>

        {/* System Status */}
        <div className="admin-panel-card settings-card">

          <div className="settings-card-header">
            <div className="settings-icon">
              🖥️
            </div>

            <div>
              <h3>System Status</h3>
              <p>
                Control application availability.
              </p>
            </div>
          </div>

          <div className="setting-row">

            <div>
              <strong>Maintenance Mode</strong>
              <span>
                Temporarily restrict normal application
                access.
              </span>
            </div>

            <button
              className={
                settings.maintenanceMode
                  ? "toggle active"
                  : "toggle"
              }
              onClick={() =>
                handleToggle("maintenanceMode")
              }
            >
              <span></span>
            </button>

          </div>

          <div className="system-status">

            <span className="status-dot"></span>

            <div>
              <strong>
                System Online
              </strong>

              <p>
                CampusCoin is currently available.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Admin Information */}
      <div className="admin-panel-card">

        <div className="panel-header">

          <div>
            <h3>Administrator Information</h3>
            <p>
              Current administrator account.
            </p>
          </div>

          <span className="panel-badge">
            Admin
          </span>

        </div>

        <div className="admin-profile-settings">

          <div className="admin-profile-avatar">
            A
          </div>

          <div className="admin-profile-details">
            <h3>Administrator</h3>
            <p>admin@campuscoin.com</p>
            <span>
              System Administrator
            </span>
          </div>

        </div>

      </div>

      {/* System Information */}
      <div className="admin-info-box">

        <div className="info-box-icon">
          💡
        </div>

        <div>
          <h4>About Admin Settings</h4>

          <p>
            These settings provide administrative
            controls for the CampusCoin application.
            Backend integration can connect these
            controls with the database and system
            configuration.
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminSettings;