import { useState } from "react";

function ManageTransactions() {
  const [transactions] = useState([
    {
      id: 1,
      user: "Zeenat",
      type: "Expense",
      category: "Food",
      amount: "Rs. 2,500",
      description: "Lunch and snacks",
      date: "24 Sep 2026",
    },
    {
      id: 2,
      user: "Student User",
      type: "Income",
      category: "Allowance",
      amount: "Rs. 15,000",
      description: "Monthly allowance",
      date: "23 Sep 2026",
    },
    {
      id: 3,
      user: "Zeenat",
      type: "Expense",
      category: "Transport",
      amount: "Rs. 1,200",
      description: "Travel expenses",
      date: "22 Sep 2026",
    },
  ]);

  return (
    <div className="admin-page">

      {/* Page Header */}
      <div className="page-heading">
        <div>
          <h1>Manage Transactions</h1>
          <p>
            View and monitor transactions recorded by students.
          </p>
        </div>

        <div className="dashboard-date">
          💳 Transaction Management
        </div>
      </div>

      {/* Statistics */}
      <div className="admin-stats-grid">

        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon transaction-icon">
              💳
            </div>

            <span className="stat-label">
              Transactions
            </span>
          </div>

          <h2>{transactions.length}</h2>
          <p>Total Transactions</p>
        </div>

        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon users-icon">
              💰
            </div>

            <span className="stat-label">
              Income
            </span>
          </div>

          <h2>
            {
              transactions.filter(
                (transaction) =>
                  transaction.type === "Income"
              ).length
            }
          </h2>

          <p>Income Entries</p>
        </div>

        <div className="admin-stat-card">
          <div className="stat-card-top">
            <div className="stat-icon category-icon">
              📉
            </div>

            <span className="stat-label">
              Expenses
            </span>
          </div>

          <h2>
            {
              transactions.filter(
                (transaction) =>
                  transaction.type === "Expense"
              ).length
            }
          </h2>

          <p>Expense Entries</p>
        </div>

      </div>

      {/* Transactions Table */}
      <div className="admin-panel-card">

        <div className="panel-header">
          <div>
            <h3>Transaction History</h3>
            <p>
              All recorded student transactions
            </p>
          </div>

          <span className="panel-badge">
            {transactions.length} Records
          </span>
        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Type</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              {transactions.map((transaction) => (
                <tr key={transaction.id}>

                  <td>
                    {transaction.id}
                  </td>

                  <td>
                    <div className="table-user">

                      <div className="table-avatar">
                        {transaction.user.charAt(0)}
                      </div>

                      <strong>
                        {transaction.user}
                      </strong>

                    </div>
                  </td>

                  <td>
                    <span
                      className={
                        transaction.type === "Income"
                          ? "status-badge active"
                          : "status-badge expense"
                      }
                    >
                      {transaction.type}
                    </span>
                  </td>

                  <td>
                    {transaction.category}
                  </td>

                  <td>
                    <strong>
                      {transaction.amount}
                    </strong>
                  </td>

                  <td>
                    {transaction.description}
                  </td>

                  <td>
                    {transaction.date}
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

export default ManageTransactions;