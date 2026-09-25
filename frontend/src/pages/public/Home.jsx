
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero */}
      <section className="hero">

        <div className="hero-content">

          <div className="hero-text">

            <span className="hero-badge">
              🎓 Built for Students
            </span>

            <h1>
              Your Money.
              <br />
              Your Goals.
              <br />
              <span>Your Campus Life.</span>
            </h1>

            <p>
              Campus Coin helps students track income, manage expenses,
              create budgets and build better saving habits.
            </p>

            <div className="hero-buttons">
              <Link to="/register" className="btn-primary">
                Get Started
              </Link>

              <Link to="/login" className="btn-secondary">
                Login
              </Link>
            </div>

          </div>

          <div className="hero-card">

            <div className="mini-card-header">
              <span>Monthly Balance</span>
              <span>September</span>
            </div>

            <h2>Rs. 32,500</h2>

            <div className="mini-stats">

              <div>
                <small>Income</small>
                <strong>Rs. 50,000</strong>
              </div>

              <div>
                <small>Expenses</small>
                <strong>Rs. 17,500</strong>
              </div>

            </div>

            <div className="progress-box">
              <div className="progress-title">
                <span>Monthly Budget</span>
                <span>75%</span>
              </div>

              <div className="progress">
                <div></div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features">

        <div className="section-heading">
          <span>Everything You Need</span>
          <h2>Manage Your Money Smarter</h2>
          <p>
            Simple tools designed around the everyday financial needs
            of students.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Track Money</h3>
            <p>
              Quickly record your income and expenses.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Understand Spending</h3>
            <p>
              See where your money is going through useful charts.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Set Budgets</h3>
            <p>
              Create monthly budgets and monitor your progress.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Save Better</h3>
            <p>
              Get useful tips based on your spending habits.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;