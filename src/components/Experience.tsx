import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Elevate Labs",
      period: "April 2025 – May 2025",
      responsibilities: [
        "Cleaned, transformed, and analyzed datasets using Python (Pandas, NumPy) to improve data quality and consistency.",
        "Wrote optimized SQL queries to extract and manage data from relational databases.",
        "Designed interactive Power BI dashboards to visualize KPIs and business insights.",
        "Conducted exploratory data analysis to identify trends and support decision-making."
      ]
    },
    {
      title: "Android Developer Intern (Virtual)",
      company: "Edu Skills",
      period: "April 2025 – June 2025",
      responsibilities: [
        "Completed a 3-month internship focused on Android application development.",
        "Gained hands-on experience with Java, Android Studio, and UI/UX design principles.",
        "Developed mini projects involving activity lifecycle, layouts, and API integration.",
        "Learned application testing, debugging, and deployment fundamentals."
      ]
    }
  ];

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <div className="fade-in">
        <h1 className="gradient-text" style={{ fontSize: '48px', textAlign: 'center', marginBottom: '50px' }}>
          PROFESSIONAL EXPERIENCE
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card" style={{ marginBottom: '30px' }}>
                <h2 className="gradient-text" style={{ fontSize: '24px', marginBottom: '10px' }}>
                  {exp.title}
                </h2>
                <h3 style={{ color: '#667eea', fontSize: '18px', marginBottom: '8px' }}>
                  {exp.company}
                </h3>
                <p style={{ color: '#888', fontSize: '14px', marginBottom: '20px', fontStyle: 'italic' }}>
                  {exp.period}
                </p>
                
                <div>
                  <h4 style={{ color: '#ccc', marginBottom: '15px', fontSize: '16px' }}>
                    Key Responsibilities:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li 
                        key={respIndex} 
                        style={{ 
                          marginBottom: '12px', 
                          paddingLeft: '20px',
                          position: 'relative',
                          lineHeight: '1.6',
                          color: '#ddd'
                        }}
                      >
                        <span 
                          style={{ 
                            position: 'absolute',
                            left: 0,
                            top: '8px',
                            width: '6px',
                            height: '6px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '50%'
                          }}
                        />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card slide-in-left" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h3 className="gradient-text" style={{ fontSize: '20px', marginBottom: '15px' }}>
            Professional Growth
          </h3>
          <p style={{ lineHeight: '1.6', color: '#ccc' }}>
            These internships have provided me with hands-on experience in both data analytics and software development, 
            allowing me to apply theoretical knowledge to real-world business challenges and develop a comprehensive 
            understanding of the technology industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
