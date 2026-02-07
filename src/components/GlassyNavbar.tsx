import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './GlassyNavbar.css';

interface NavItem {
  label: string;
  href: string;
}

interface GlassyNavbarProps {
  items: NavItem[];
}

const GlassyNavbar: React.FC<GlassyNavbarProps> = ({ items }) => {
  const location = useLocation();
  const activeHref = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="glassy-navbar">
      <div className="glassy-navbar-container">
        <Link to="/" className="glassy-logo" onClick={closeMobileMenu}>
          <span className="logo-text">AC</span>
        </Link>
        
        <div className="glassy-nav-items">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={`glassy-nav-link ${activeHref === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`mobile-nav-link ${activeHref === item.href ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default GlassyNavbar;
