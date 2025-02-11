import { FaSpotify, FaHome, FaSearch } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <FaSpotify className="icon spotify-icon" />
        <FaHome className="icon home-icon" />
      </div>

      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="What do you want to play?" />
      </div>

      <div className="nav-links">
        <a href="#">Premium</a>
        <a href="#">Support</a>
        <a href="#">Download</a>
        <div className="divider"></div>
        <button className="signup-btn">Sign up</button>
        <button className="login-btn">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
