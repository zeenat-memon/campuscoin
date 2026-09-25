import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <div className="auth-logo">
            Campus<span>Coin</span>
          </div>

          <h1>Create Account</h1>

          <p>
            Start managing your student finances today.
          </p>
        </div>

        <form>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Academic Year</label>

              <select>
                <option>Select Year</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>

            <div className="form-group">
              <label>Monthly Allowance</label>

              <input
                type="number"
                placeholder="Rs. 0"
              />
            </div>

          </div>

          <div className="form-group">
            <label>Monthly Savings Goal</label>

            <input
              type="number"
              placeholder="Rs. 0"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create password"
            />
          </div>

          <button className="auth-button" type="submit">
            Create Account
          </button>

        </form>

        <p className="auth-footer">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;