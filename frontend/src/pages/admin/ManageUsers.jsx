import { useState } from "react";

function ManageUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Zeenat",
      email: "zeenat@example.com",
      academicYear: "Year 2",
      status: "Active",
    },
    {
      id: 2,
      name: "Student User",
      email: "student@example.com",
      academicYear: "Year 1",
      status: "Active",
    },
  ]);

  const handleDisable = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: "Disabled" }
          : user
      )
    );
  };

  const handleReset = (id) => {
    const user = users.find((item) => item.id === id);

    if (user) {
      alert(`Password reset requested for ${user.email}`);
    }
  };

  return (
    <div className="admin-page">

      {/* Page Header */}
      <div className="page-heading">
        <div>
          <h1>Manage Users</h1>
          <p>
            View and manage CampusCoin user accounts.
          </p>
        </div>

        <div className="dashboard-date">
          👥 User Management
        </div>
      </div>

      {/* User Statistics */}
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

          <h2>{users.length}</h2>
          <p>Total Users</p>
        </div>

        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon users-icon">
              ✅
            </div>

            <span className="stat-label">
              Active
            </span>
          </div>

          <h2>
            {
              users.filter(
                (user) => user.status === "Active"
              ).length
            }
          </h2>

          <p>Active Accounts</p>
        </div>

        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon transaction-icon">
              🚫
            </div>

            <span className="stat-label">
              Disabled
            </span>
          </div>

          <h2>
            {
              users.filter(
                (user) => user.status === "Disabled"
              ).length
            }
          </h2>

          <p>Disabled Accounts</p>
        </div>

      </div>

      {/* Users Table */}
      <div className="admin-panel-card">

        <div className="panel-header">
          <div>
            <h3>User Accounts</h3>
            <p>
              Manage registered CampusCoin users
            </p>
          </div>

          <span className="panel-badge">
            {users.length} Users
          </span>
        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Academic Year</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (
                <tr key={user.id}>

                  <td>
                    {user.id}
                  </td>

                  <td>
                    <div className="table-user">

                      <div className="table-avatar">
                        {user.name.charAt(0)}
                      </div>

                      <strong>
                        {user.name}
                      </strong>

                    </div>
                  </td>

                  <td>
                    {user.email}
                  </td>

                  <td>
                    {user.academicYear}
                  </td>

                  <td>
                    <span
                      className={
                        user.status === "Active"
                          ? "status-badge active"
                          : "status-badge disabled"
                      }
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>

                    <div className="table-actions">

                      <button
                        className="action-btn reset-btn"
                        onClick={() =>
                          handleReset(user.id)
                        }
                      >
                        🔑 Reset
                      </button>

                      {user.status === "Active" ? (
                        <button
                          className="action-btn disable-btn"
                          onClick={() =>
                            handleDisable(user.id)
                          }
                        >
                          🚫 Disable
                        </button>
                      ) : (
                        <button
                          className="action-btn enable-btn"
                          onClick={() =>
                            setUsers(
                              users.map((item) =>
                                item.id === user.id
                                  ? {
                                      ...item,
                                      status: "Active",
                                    }
                                  : item
                              )
                            )
                          }
                        >
                          ✅ Enable
                        </button>
                      )}

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default ManageUsers;