import React from 'react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Python",
      issuer: "Great Learning",
      description: "Comprehensive Python programming course covering fundamentals, data structures, and advanced concepts.",
      skills: ["Python", "Programming", "Data Structures", "Algorithms"]
    },
    {
      title: "Power BI for Data Analysis",
      issuer: "Vodafone Idea Foundation",
      description: "Hands-on training in Power BI for data visualization, dashboard creation, and business intelligence.",
      skills: ["Power BI", "Data Visualization", "Dashboard Creation", "Business Intelligence"]
    },
    {
      title: "Machine Learning Models",
      issuer: "Vodafone Idea Foundation",
      description: "In-depth course on machine learning algorithms, model building, and predictive analytics.",
      skills: ["Machine Learning", "Predictive Analytics", "Model Building", "Algorithms"]
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      issuer: "Accenture (Forage)",
      description: "Real-world job simulation experience in data analytics and visualization with industry-relevant projects.",
      skills: ["Data Analytics", "Visualization", "Job Simulation", "Industry Projects"]
    },
    {
      title: "Introduction to Microsoft Excel",
      issuer: "Coursera Project Network",
      description: "Fundamental Excel skills including formulas, functions, data analysis, and visualization techniques.",
      skills: ["Excel", "Data Analysis", "Formulas", "Visualization"]
    },
    {
      title: "Generative AI",
      issuer: "Simplilearn",
      description: "Introduction to generative AI concepts, tools, and applications in modern technology landscape.",
      skills: ["Generative AI", "AI Tools", "Machine Learning", "Innovation"]
    }
  ];

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <div className="fade-in">
        <h1 className="gradient-text" style={{ fontSize: '48px', textAlign: 'center', marginBottom: '20px' }}>
          CERTIFICATIONS
        </h1>
        
        <p style={{ 
          textAlign: 'center', 
          fontSize: '18px', 
          color: '#ccc', 
          marginBottom: '50px',
          maxWidth: '600px',
          margin: '0 auto 50px auto',
          lineHeight: '1.6'
        }}>
          Professional certifications that validate my expertise in data analytics, programming, and emerging technologies.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className={`card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div style={{ marginBottom: '20px' }}>
                <h2 className="gradient-text" style={{ fontSize: '22px', marginBottom: '10px' }}>
                  {cert.title}
                </h2>
                <h3 style={{ color: '#667eea', fontSize: '16px', marginBottom: '15px' }}>
                  🏢 {cert.issuer}
                </h3>
              </div>

              <p style={{ 
                lineHeight: '1.6', 
                color: '#ddd', 
                marginBottom: '20px',
                fontSize: '15px'
              }}>
                {cert.description}
              </p>

              <div style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
                paddingTop: '15px' 
              }}>
                <h4 style={{ 
                  color: '#ccc', 
                  marginBottom: '12px', 
                  fontSize: '14px',
                  textAlign: 'center'
                }}>
                  Key Skills Gained:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {cert.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-tag"
                      style={{ fontSize: '12px' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card slide-in-left" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h3 className="gradient-text" style={{ fontSize: '20px', marginBottom: '15px' }}>
            Continuous Learning
          </h3>
          <p style={{ lineHeight: '1.6', color: '#ccc', marginBottom: '20px' }}>
            I believe in continuous learning and staying updated with the latest industry trends. 
            These certifications represent my commitment to professional development and excellence 
            in the field of data analytics and technology.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '8px' }}>📚 6+ Certifications</h4>
              <p style={{ color: '#aaa', fontSize: '14px' }}>From leading platforms</p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '8px' }}>🎯 Industry Relevant</h4>
              <p style={{ color: '#aaa', fontSize: '14px' }}>Practical skills application</p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '8px' }}>🚀 Career Growth</h4>
              <p style={{ color: '#aaa', fontSize: '14px' }}>Professional development</p>
            </div>
          </div>
        </div>

        <div className="card slide-in-right" style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3 className="gradient-text" style={{ fontSize: '20px', marginBottom: '15px' }}>
            Verification Available
          </h3>
          <p style={{ lineHeight: '1.6', color: '#ccc' }}>
            All certificates are verifiable and can be provided upon request. Feel free to reach out 
            if you'd like to see detailed credentials or learn more about my qualifications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
