import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      padding: '20px 0',
      position: 'fixed',
      top: '50%',
      left: '0',
      right: '0',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/experience" className="nav-link">Experience</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/certificates" className="nav-link">Certificates</Link>
          <Link to="/services" className="nav-link">Services</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
