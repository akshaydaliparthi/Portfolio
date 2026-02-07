import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "🤖 SummarAI - AI-Powered Text Summarization Web App",
      tools: "Python, Flask, Transformers",
      description: [
        "Built a powerful web application leveraging state-of-the-art AI technology for quick and accurate text summarization.",
        "Powered by the BART-large-CNN model from Facebook for converting lengthy articles into concise, meaningful summaries.",
        "Implemented Flask backend with seamless user experience and responsive design.",
        "Provides instant summarization with high accuracy for various text formats and lengths."
      ],
      github: "https://github.com/akshaydaliparthi/Mini_Project_Ai_Summarize"
    },
    {
      title: "🍎 NutriPro - AI-Powered Personalized Nutrition Tracker",
      tools: "AI, Mobile Development",
      description: [
        "Revolutionary mobile nutrition tracking app combining cutting-edge AI technology with personalized health insights.",
        "Your Personal AI Nutritionist in Your Pocket for transforming diet and wellness journey management.",
        "Provides personalized nutrition recommendations based on user's health goals and dietary preferences.",
        "Features intelligent meal tracking, calorie counting, and nutritional analysis with AI-powered insights."
      ],
      github: "https://github.com/akshaydaliparthi/NutriPro"
    },
    {
      title: "Netflix Movie Data Cleaning & Dashboard",
      tools: "Python, Power BI",
      description: [
        "Cleaned and preprocessed a Netflix movies and TV shows dataset using Pandas and NumPy.",
        "Handled missing values, standardized date formats, and removed duplicate records.",
        "Split duration fields into numeric and categorical variables for better analysis.",
        "Built an interactive Power BI dashboard showing content distribution, release trends, and duration insights."
      ]
    }
  ];

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <div className="fade-in">
        <h1 className="gradient-text" style={{ fontSize: '48px', textAlign: 'center', marginBottom: '50px' }}>
          PROJECTS
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`card ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h2 className="gradient-text" style={{ fontSize: '24px', marginBottom: '15px' }}>
                {project.title}
              </h2>
              
              <div style={{ marginBottom: '20px' }}>
                <span style={{ 
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  color: '#667eea',
                  border: '1px solid rgba(102, 126, 234, 0.5)'
                }}>
                  🛠️ {project.tools}
                </span>
              </div>

              <div>
                <h4 style={{ color: '#ccc', marginBottom: '15px', fontSize: '16px' }}>
                  Project Overview:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {project.description.map((desc, descIndex) => (
                    <li 
                      key={descIndex} 
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
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              {project.github && (
                <div style={{ marginTop: '20px' }}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderRadius: '50px',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                    }}
                  >
                    💻 View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="card slide-in-left" style={{ marginTop: '40px', textAlign: 'center' }}>
          <h3 className="gradient-text" style={{ fontSize: '20px', marginBottom: '15px' }}>
            Project Highlights
          </h3>
          <p style={{ lineHeight: '1.6', color: '#ccc' }}>
            My projects demonstrate practical application of data analytics skills, from data preprocessing and cleaning 
            to creating interactive dashboards that provide actionable insights. Each project follows industry best practices 
            and showcases my ability to work with real-world datasets.
          </p>
        </div>

        <div className="card slide-in-right" style={{ marginTop: '30px', textAlign: 'center' }}>
          <h3 className="gradient-text" style={{ fontSize: '20px', marginBottom: '15px' }}>
            Technical Approach
          </h3>
          <p style={{ lineHeight: '1.6', color: '#ccc' }}>
            I follow a structured approach to data projects, starting with understanding business requirements, 
            followed by data collection, cleaning, analysis, and visualization. This ensures that the final deliverables 
            are not only technically sound but also provide meaningful business value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
