import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">

          <div className="auth-logo">
            Campus<span>Coin</span>
          </div>

          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue managing your finances.
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

          <div className="form-group">

            <div className="label-row">
              <label>Password</label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
            />

          </div>

          <label className="remember">
            <input type="checkbox" />
            Remember me
          </label>

          <button className="auth-button" type="submit">
            Login
          </button>

        </form>

        <p className="auth-footer">
          Don't have an account?
          <Link to="/register"> Create Account</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;