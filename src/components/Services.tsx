import React, { useState } from 'react';
import BookDemoModal from './BookDemoModal.tsx';

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: "📝",
      title: "Content Writing",
      description: "Professional content creation including technical documentation, blog posts, articles, and marketing copy. Specializing in technology and data-related content with clear, engaging writing style.",
      features: ["Technical Documentation", "Blog Posts", "SEO Content", "Marketing Copy"]
    },
    {
      icon: "🎬",
      title: "Video Editing",
      description: "Professional video editing services for educational content, tutorials, presentations, and promotional materials. Focus on clean, engaging edits that effectively communicate your message.",
      features: ["Tutorial Videos", "Presentations", "Promotional Content", "Color Grading"]
    },
    {
      icon: "🎨",
      title: "Creative Thumbnails",
      description: "Eye-catching thumbnail design for YouTube, social media, and online courses. Creating visually appealing thumbnails that increase click-through rates and audience engagement.",
      features: ["YouTube Thumbnails", "Social Media Graphics", "Course Thumbnails", "Brand Consistency"]
    },
    {
      icon: "🖼️",
      title: "Poster Editing",
      description: "Professional poster design and editing for events, promotions, and informational purposes. Creating visually striking posters that capture attention and convey messages effectively.",
      features: ["Event Posters", "Promotional Materials", "Informational Design", "Print-Ready Files"]
    },
    {
      icon: "💻",
      title: "UI Design",
      description: "User interface design for web and mobile applications. Creating intuitive, visually appealing interfaces that enhance user experience and align with modern design principles.",
      features: ["Web UI Design", "Mobile App Design", "Wireframing", "Prototyping"]
    }
  ];

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <div className="fade-in">
        <h1 className="gradient-text" style={{ fontSize: '48px', textAlign: 'center', marginBottom: '20px' }}>
          SERVICES
        </h1>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{
              padding: '15px 40px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '50px',
              fontWeight: 'bold',
              fontSize: '18px',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'inline-block',
              cursor: 'pointer'
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
            📅 Book a Demo
          </button>
        </div>
        
        <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        
        <p style={{ 
          textAlign: 'center', 
          fontSize: '18px', 
          color: '#ccc', 
          marginBottom: '50px',
          maxWidth: '600px',
          margin: '0 auto 50px auto',
          lineHeight: '1.6'
        }}>
          Offering a comprehensive range of creative and technical services to help bring your ideas to life. 
          From content creation to design solutions, I provide professional services tailored to your needs.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h2 className="gradient-text" style={{ fontSize: '24px', marginBottom: '15px' }}>
                {service.title}
              </h2>
              
              <p style={{ 
                lineHeight: '1.6', 
                color: '#ddd', 
                marginBottom: '20px',
                fontSize: '15px'
              }}>
                {service.description}
              </p>

              <div style={{ marginTop: '20px' }}>
                <h4 style={{ 
                  color: '#667eea', 
                  marginBottom: '12px', 
                  fontSize: '14px',
                  textAlign: 'center'
                }}>
                  Key Features:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex} 
                      className="skill-tag"
                      style={{ fontSize: '12px' }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card slide-in-left" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h3 className="gradient-text" style={{ fontSize: '20px', marginBottom: '15px' }}>
            Why Choose My Services?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '10px' }}>🎯 Quality Focus</h4>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.5' }}>
                Delivering high-quality work that meets your specific requirements and exceeds expectations.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '10px' }}>⚡ Quick Turnaround</h4>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.5' }}>
                Efficient workflow ensuring timely delivery without compromising on quality.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '10px' }}>💡 Creative Solutions</h4>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.5' }}>
                Innovative approach to problem-solving with attention to detail and modern design trends.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '10px' }}>🤝 Client Collaboration</h4>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.5' }}>
                Working closely with clients to ensure the final product aligns with their vision and goals.
              </p>
            </div>
          </div>
        </div>

        <div className="card slide-in-right" style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3 className="gradient-text" style={{ fontSize: '20px', marginBottom: '15px' }}>
            Get In Touch
          </h3>
          <p style={{ lineHeight: '1.6', color: '#ccc', marginBottom: '20px' }}>
            Interested in any of these services? Let's discuss how I can help bring your project to life!
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:akshaydaliparthi05@gmail.com" className="contact-link" style={{ fontSize: '16px' }}>
              📧 akshaydaliparthi05@gmail.com
            </a>
            <a href="tel:+918897886704" className="contact-link" style={{ fontSize: '16px' }}>
              📞 +91 8897886704
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
