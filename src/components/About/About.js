import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Learn about Aquif Zubair's professional journey, technical skills, and expertise in React, Node.js, and Full Stack Development." />
        <meta name="keywords" content="About Aquif Zubair, Software Engineer Skills, Technical Expertise, React Development, Node.js Development" />
      </Helmet>
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <div className="text-content">
                <p className="about-description">
                  I'm a Software Engineer with expertise in building exceptional backend solutions. 
                  Currently at Leucine Tech, I specialize in developing scalable microservices 
                  and implementing enterprise-level integrations including SSO solutions.
                </p>
                <p className="about-description">
                  My focus is on creating high-performance systems that efficiently handle complex 
                  business logic, while maintaining code quality and system reliability.
                </p>
              </div>
            </div>

            <div className="skills-wrapper">
              <div className="skills-container">
                <div className="skills-group">
                  <h3>Core Technologies</h3>
                  <div className="tech-tags">
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>KoaJs</span>
                    <span>TypeScript</span>
                    <span>JavaScript</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                  </div>
                </div>

                <div className="skills-group">
                  <h3>Databases</h3>
                  <div className="tech-tags">
                    <span>PostgreSQL</span>
                    <span>MySQL</span>
                    <span>Redis</span>
                  </div>
                </div>

                <div className="skills-group">
                  <h3>Tools & Others</h3>
                  <div className="tech-tags">
                    <span>Git</span>
                    <span>VS Code</span>
                    <span>Postman</span>
                    <span>Insomnia</span>
                    <span>Docker</span>
                    <span>AWS</span>
                    <span>Kafka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 