import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Get in touch with Aquif Zubair for software development opportunities and collaborations." />
        <meta name="keywords" content="Contact Aquif Zubair, Hire React Developer, Software Engineer Contact, Full Stack Developer Contact" />
      </Helmet>
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-description">
                Feel free to reach out to me for any questions or opportunities!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h3>Email</h3>
                    <a href="mailto:aquifzubair@gmail.com">aquifzubair@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-text">
                    <h3>Phone</h3>
                    <a href="tel:+919140181089">+91 9140181089</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaLinkedin />
                  </div>
                  <div className="contact-text">
                    <h3>LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/aquif-zubair-167b23155/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Aquif Zubair
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaGithub />
                  </div>
                  <div className="contact-text">
                    <h3>GitHub</h3>
                    <a 
                      href="https://github.com/aquifzubair" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      aquifzubair
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h3>Location</h3>
                    <p>Bangalore, India</p>
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

export default Contact; 