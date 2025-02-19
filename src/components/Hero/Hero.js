import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Aquif Zubair | Senior Software Engineer - React & Node.js Expert</title>
        <meta name="description" content="Senior Software Engineer with expertise in React, Node.js, and Full Stack Development. View my portfolio and professional experience." />
        <meta name="keywords" content="Aquif Zubair, React Developer, Node.js Developer, Senior Software Engineer, Full Stack Developer" />
      </Helmet>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Building Scalable
            <br />
            Backend Solutions
          </h1>
          <p className="hero-subtitle">
            A passionate Node.js developer specializing in crafting efficient microservices 
            and robust applications that scale seamlessly.
          </p>
          <div className="hero-cta">
            <a href="#experience" className="cta-link">
              View my experience →
            </a>
          </div>
        </div>
        <div className="hero-background">
          <div className="background-text">Backend Engineer</div>
        </div>
      </section>
    </>
  );
};

export default Hero; 