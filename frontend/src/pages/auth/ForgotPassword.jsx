import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">

          <div className="auth-logo">
            Campus<span>Coin</span>
          </div>

          <h1>Forgot Password?</h1>

          <p>
            Enter your email and we'll help you reset your password.
          </p>

        </div>

        <form>

          <div className="form-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>

          <button className="auth-button">
            Send Reset Link
          </button>

        </form>

        <p className="auth-footer">
          <Link to="/login">← Back to Login</Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;