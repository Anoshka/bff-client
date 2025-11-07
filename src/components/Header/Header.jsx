import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { client, headerPagesQuery } from "../../lib/sanityClient";
import logo from "../../assets/logo/bff-logo.png";
import "./Header.scss";

// Static navigation links (always shown)
const staticNavLinks = [
  { to: "/", label: "HOME" },
  { to: "/adoptables", label: "ADOPTABLES" },
  { to: "/apply-to-adopt", label: "APPLY TO ADOPT" },
  { to: "/apply-to-foster", label: "APPLY TO FOSTER" },
  { to: "/happy-tails", label: "HAPPY TAILS" },
  { to: "/faq", label: "FAQ" },
  { to: "/how-to-help", label: "HOW TO HELP" },
  { to: "/contact-us", label: "CONTACT US" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dynamicPages, setDynamicPages] = useState([]);

  useEffect(() => {
    const fetchHeaderPages = async () => {
      try {
        console.log("🔍 Header: Fetching pages for navigation...");
        
        // First, let's check all pages to see what exists
        const allPagesQuery = `*[_type == "page"] {
          _id,
          title,
          "slug": slug.current,
          showInHeader,
          headerOrder,
          _id
        }`;
        const allPages = await client.fetch(allPagesQuery);
        console.log("📋 Header: All pages in Sanity:", allPages);
        console.log("📋 Header: All pages count:", allPages?.length || 0);
        
        // Now get only pages with showInHeader = true
        const pages = await client.fetch(headerPagesQuery);
        console.log("📦 Header: Pages with showInHeader=true:", pages);
        console.log("📦 Header: Pages count:", pages?.length || 0);
        
        // Log each page's showInHeader status
        if (allPages && allPages.length > 0) {
          allPages.forEach((page) => {
            console.log(`📄 Page "${page.title}": showInHeader = ${page.showInHeader}, slug = ${page.slug}`);
          });
        }
        
        setDynamicPages(pages || []);
      } catch (error) {
        console.error("❌ Header: Error fetching header pages:", error);
      }
    };

    fetchHeaderPages();
  }, []);

  // Combine static and dynamic pages
  // Static pages come first, then dynamic pages from Sanity
  const allNavLinks = [
    ...staticNavLinks,
    ...dynamicPages.map((page) => ({
      to: `/${page.slug}`,
      label: page.title.toUpperCase(),
    })),
  ];

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
          {allNavLinks.map((link) => (
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
