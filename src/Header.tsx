function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        Edu<span>Learn</span>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="login-btn">Login</button>
    </header>
  );
}

export default Header;