import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      padding: '40px 20px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: '60px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '30px'
        }}>
          {/* Personal Info */}
          <div>
            <h3 className="gradient-text" style={{ fontSize: '18px', marginBottom: '15px' }}>
              AKSHAY CHAND DALIPARTHI
            </h3>
            <p style={{ color: '#ccc', lineHeight: '1.6', fontSize: '14px' }}>
              Information Technology student specializing in data analytics and business intelligence. 
              Passionate about creating data-driven solutions and innovative web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#667eea', fontSize: '16px', marginBottom: '15px' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="/" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Home</a>
              <a href="/skills" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Skills</a>
              <a href="/experience" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Experience</a>
              <a href="/projects" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Projects</a>
              <a href="/certificates" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Certificates</a>
              <a href="/services" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>Services</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#667eea', fontSize: '16px', marginBottom: '15px' }}>
              Contact Information
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>📞</span>
                <a href="tel:+918897886704" className="contact-link" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                  +91 8897886704
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>✉️</span>
                <a href="mailto:akshaydaliparthi05@gmail.com" className="contact-link" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                  akshaydaliparthi05@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>🔗</span>
                <a href="https://www.linkedin.com/in/akshay-chand-88871731b/" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                  LinkedIn Profile
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>💻</span>
                <a href="https://github.com/akshaydaliparthi" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#667eea', fontSize: '16px', marginBottom: '15px' }}>
              Services
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ color: '#ccc', fontSize: '14px' }}>📝 Content Writing</span>
              <span style={{ color: '#ccc', fontSize: '14px' }}>🎬 Video Editing</span>
              <span style={{ color: '#ccc', fontSize: '14px' }}>🎨 Creative Thumbnails</span>
              <span style={{ color: '#ccc', fontSize: '14px' }}>🖼️ Poster Editing</span>
              <span style={{ color: '#ccc', fontSize: '14px' }}>💻 UI Design</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#888', fontSize: '12px', margin: 0 }}>
            © AKSHAY CHAND DALIPARTHI. All rights reserved. | Built with React & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
