import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setDark(!dark);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["home", "about", "projects", "skills", "contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h2 className="nav-logo">Vidhya</h2>

      {/* Desktop Links */}
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link}
            to={link}
            smooth={true}
            duration={600}
            offset={-70}
            spy={true}
            activeClass="active-link"
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="theme-btn"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? "bar open" : "bar"} />
        <span className={menuOpen ? "bar open" : "bar"} />
        <span className={menuOpen ? "bar open" : "bar"} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={600}
              offset={-70}
              onClick={() => setMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="theme-btn"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
