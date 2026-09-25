import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-container">

        <Link to="/" className="logo">
          Campus<span>Coin</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className="nav-login">
            Login
          </Link>
          <Link to="/register" className="nav-register">
            Get Started
          </Link>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;