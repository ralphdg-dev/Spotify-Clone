import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Spotify</div>
      <input type="text" placeholder="What do you want to play?" />
      <div className="nav-links">
        <a href="#">Premium</a>
        <a href="#">Support</a>
        <a href="#">Download</a>
        <button className="login-btn">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
