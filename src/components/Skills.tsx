import React from 'react';

const Skills: React.FC = () => {
  const skillsData = {
    "Programming & Tools": [
      "Python", "SQL", "Power BI", "Looker Studio", "Excel", 
      "MS Office Suite", "Git", "GitHub"
    ],
    "Data Analytics": [
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Statistical Analysis",
      "KPI & Dashboard Development",
      "Report Automation"
    ],
    "Business Intelligence & Visualization": [
      "Power BI", "Looker Studio", "Excel Dashboards",
      "Data Storytelling", "DAX", "Power Query"
    ],
    "Creative & Design Skills": [
      "Thumbnail Design (Canva, Adobe, Photoshop)",
      "Video Editing",
      "Poster Design & Editing",
      "UI/UX Design",
      "Graphic Design",
      "Visual Content Creation"
    ],
    "Content Writing": [
      "Technical Documentation",
      "Blog Writing",
      "SEO Content",
      "Marketing Copy",
      "Creative Writing",
      "Content Strategy"
    ],
    "Methodologies": [
      "CRISP-DM", "Agile (Scrum Basics)", "A/B Testing", "Hypothesis Testing"
    ],
    "Generative AI Tools": [
      "ChatGPT", "GitHub Copilot"
    ],
    "Soft Skills": [
      "Analytical Thinking", "Problem Solving", "Business Communication",
      "Presentation Skills", "Time Management", "Team Collaboration"
    ]
  };

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <div className="fade-in">
        <h1 className="gradient-text" style={{ fontSize: '48px', textAlign: 'center', marginBottom: '50px' }}>
          CORE SKILLS
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div 
              key={category} 
              className={`card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="gradient-text" style={{ fontSize: '24px', marginBottom: '20px' }}>
                {category}
              </h2>
              <div>
                {skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-tag"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="card slide-in-left" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h3 className="gradient-text" style={{ fontSize: '20px', marginBottom: '15px' }}>
            Technical Proficiency
          </h3>
          <p style={{ lineHeight: '1.6', color: '#ccc' }}>
            Strong foundation in data analytics and visualization tools with hands-on experience in 
            real-world projects. Proficient in end-to-end data pipeline development from data cleaning 
            to dashboard creation and reporting automation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
