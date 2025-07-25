import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/bff-logo.png";
import "./Header.scss";

const navLinks = [
  { to: "/", label: "HOME" },
  { to: "/adoptables", label: "ADOPTABLES" },
  { to: "/apply-to-adopt", label: "APPLY TO ADOPT" },
  { to: "/apply-to-foster", label: "APPLY TO FOSTER" },
  { to: "/happy-tails", label: "HAPPY TAILS" },
  { to: "/faq", label: "FAQ" },
  { to: "/how-to-help", label: "HOW TO HELP" },
  { to: "/contact", label: "CONTACT US" },
];

const Header = () => {
  console.log("opening menu");
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("menu state", menuOpen);

  return (
    <header className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img
            src={logo}
            alt="Barney's Furry Friends Logo"
            className="header__logo"
          />
        </Link>
        <button
          className="header__menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="header__menu-icon" />
        </button>
      </div>
      <nav className={`header__nav${menuOpen ? " header__nav--open" : ""}`}>
        <ul className="header__nav-list">
          {navLinks.map((link) => (
            <li className="header__nav-item" key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  "header__nav-link" +
                  (isActive ? " header__nav-link--active" : "")
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
