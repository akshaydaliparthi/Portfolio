import React from 'react';
import { Link } from 'react-router-dom';
import Orb from './OrbWebGL.tsx';
import Particles from './Particles.tsx';
import TypingEffect from './TypingEffect.tsx';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Orb */}
      <div style={{ 
        width: '100%', 
        height: '600px', 
        position: 'relative',
        marginBottom: '60px'
      }}
      className="hero-section">
        <Orb
          hoverIntensity={2}
          rotateOnHover
          hue={0}
          forceHoverState={false}
          backgroundColor="#000000"
        />
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            textAlign: 'center',
            color: '#ffffff'
          }}>
            <h1 className="gradient-text" style={{ 
              fontSize: 'clamp(32px, 6vw, 48px)', 
              marginBottom: '20px',
              textShadow: '0 0 20px rgba(0,0,0,0.8)',
              padding: '0 20px'
            }}>
              AKSHAY CHAND DALIPARTHI
            </h1>
            <div style={{ 
              fontSize: 'clamp(18px, 4vw, 24px)', 
              marginBottom: '30px',
              textShadow: '0 0 20px rgba(0,0,0,0.8)',
              minHeight: '32px',
              padding: '0 20px'
            }}>
              <TypingEffect
                texts={[
                  'Data Analyst',
                  'Business Intelligence Specialist',
                  'Content Creator'
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
              />
            </div>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap', padding: '0 20px' }}>
              <a 
                href="mailto:akshaydaliparthi05@gmail.com"
                style={{
                  padding: '15px 30px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                }}
              >
                Contact Me
              </a>
              <Link 
                to="/projects"
                style={{
                  padding: '15px 30px',
                  background: 'transparent',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  border: '2px solid #667eea',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.2)',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.2)';
                }}
              >
                View Projects
              </Link>
            </div>
          </div>
      </div>

      {/* Know About Me Section */}
      <div className="container" style={{ padding: '0 20px 60px 20px' }}>
        <div className="fade-in">

        <div className="card slide-in-left" style={{ marginBottom: '40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.3, zIndex: 0 }}>
            <Particles
              particleColors={["#bb1b3b"]}
              particleCount={300}
              particleSpread={10}
              speed={0.5}
              particleBaseSize={200}
              moveParticlesOnHover
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          </div>
          <h2 className="gradient-text" style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            KNOW ABOUT ME
          </h2>
          <div style={{ lineHeight: '1.8', fontSize: '16px', color: '#ddd', position: 'relative', zIndex: 1 }}>
            <p style={{ marginBottom: '20px' }}>
              I'm Akshay Chand Daliparthi, a passionate Information Technology student specializing in data analytics and business intelligence. With a strong foundation in programming and data visualization, I transform complex datasets into actionable insights that drive business decisions.
            </p>
            <p style={{ marginBottom: '20px' }}>
              My journey in technology has been marked by hands-on experience in data analytics internships, where I've honed my skills in Python, SQL, and Power BI. I'm particularly fascinated by the intersection of data science and business strategy, always seeking innovative ways to leverage technology for solving real-world problems.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Beyond technical skills, I'm a creative professional offering services in content writing, video editing, UI design, and digital content creation. This unique blend of analytical and creative abilities allows me to approach problems from multiple perspectives and deliver comprehensive solutions.
            </p>
            <p>
              Currently pursuing my Bachelor of Technology in Information Technology at DVR & Dr. HS MIC College of Technology (2022-2026), I'm committed to continuous learning and staying updated with the latest industry trends. My goal is to become a versatile technology professional who can bridge the gap between data, design, and business strategy.
            </p>
          </div>
        </div>

        <div className="card slide-in-right" style={{ marginBottom: '40px' }}>
          <h2 className="gradient-text" style={{ fontSize: '32px', marginBottom: '20px', textAlign: 'center' }}>
            WHAT I DO
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>📊</div>
              <h3 style={{ color: '#667eea', marginBottom: '10px', fontSize: '18px' }}>Data Analytics</h3>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>
                Transform raw data into meaningful insights using Python, SQL, and advanced analytics techniques.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>📈</div>
              <h3 style={{ color: '#667eea', marginBottom: '10px', fontSize: '18px' }}>Business Intelligence</h3>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>
                Create interactive dashboards and reports that empower data-driven decision making.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>💻</div>
              <h3 style={{ color: '#667eea', marginBottom: '10px', fontSize: '18px' }}>Software Development</h3>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>
                Build scalable applications and solutions using modern development practices.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎨</div>
              <h3 style={{ color: '#667eea', marginBottom: '10px', fontSize: '18px' }}>Creative Services</h3>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>
                Deliver professional content writing, video editing, and UI design services.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
