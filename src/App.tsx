import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import Skills from './components/Skills.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Services from './components/Services.tsx';
import Certificates from './components/Certificates.tsx';
import Footer from './components/Footer.tsx';
import GlassyNavbar from './components/GlassyNavbar.tsx';
import LoadingAnimation from './components/LoadingAnimation.tsx';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  if (loading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <div className="App">
        <GlassyNavbar
          items={[
            { label: 'Home', href: '/' },
            { label: 'Skills', href: '/skills' },
            { label: 'Experience', href: '/experience' },
            { label: 'Projects', href: '/projects' },
            { label: 'Certificates', href: '/certificates' },
            { label: 'Services', href: '/services' }
          ]}
        />
        
        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
