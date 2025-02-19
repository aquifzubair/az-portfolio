import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Projects.css';

const Projects = () => {
  const experiences = [
    {
      company: "Leucine Tech",
      position: "Software Engineer (Node.js)",
      period: "March 2023 – Present",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Implemented enterprise-level Azure and Okta SSO solutions",
        "Optimized PostgreSQL queries, improving system performance by 40%",
        "Designed and implemented single active session functionality",
        "Led code reviews and established quality standards"
      ]
    },
    {
      company: "Zopsmart",
      position: "Software Engineer",
      period: "March 2022 – March 2023",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Developed high-performance microservices for McAfee",
        "Implemented robust data layer using PostgreSQL with Knex ORM",
        "Led and mentored a team of five junior developers",
        "Collaborated effectively with clients to define requirements"
      ]
    },
    {
      company: "Lal10",
      position: "Software Engineer",
      period: "October 2020 – February 2022",
      location: "Noida, UP",
      achievements: [
        "Developed scalable backend applications using Node.js",
        "Optimized MySQL database performance through query optimization",
        "Successfully integrated payment gateways and third-party APIs",
        "Designed and implemented product-artisan matching engine"
      ]
    },
    {
      company: "Mountblue",
      position: "Software Engineer - Trainee",
      period: "June 2020 – September 2020",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Developed a full-stack Spotify Clone using React, Express, Redux, Node.js, and MySQL",
        "Built a Project Issue Tracker application using MERN stack",
        "Gained extensive experience in full-stack development",
        "Worked effectively in an agile development environment"
      ]
    },
    {
      company: "LiftOff",
      position: "Associate Software Engineer",
      period: "January 2019 – June 2020",
      location: "Bengaluru, Karnataka",
      achievements: [
        "Implemented authentication system using React, Redux, and Firebase",
        "Completed advanced certification in Data Structures and Algorithms",
        "Developed responsive and user-friendly frontend interfaces",
        "Collaborated with team members to implement best practices"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Explore Aquif Zubair's portfolio of projects showcasing expertise in React, Node.js, and Full Stack Development." />
        <meta name="keywords" content="Software Projects, React Projects, Node.js Projects, Full Stack Development, Web Applications" />
      </Helmet>
      <section id="experience" className="experience-section">
        <div className="experience-content">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item" style={{"--i": index}}>
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3>{exp.company}</h3>
                    <span className="period">{exp.period}</span>
                  </div>
                  <h4>{exp.position}</h4>
                  <p className="location">{exp.location}</p>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects; 