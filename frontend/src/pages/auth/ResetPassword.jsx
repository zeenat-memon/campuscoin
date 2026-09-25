import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">

          <div className="auth-logo">
            Campus<span>Coin</span>
          </div>

          <h1>Reset Password</h1>

          <p>
            Create a new password for your account.
          </p>

        </div>

        <form>

          <div className="form-group">
            <label>New Password</label>

            <input
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          <button className="auth-button">
            Reset Password
          </button>

        </form>

        <p className="auth-footer">
          <Link to="/login">← Back to Login</Link>
        </p>

      </div>

    </div>
  );
}

export default ResetPassword;