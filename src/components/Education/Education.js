import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Education.css';

const Education = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Aquif Zubair's educational background and qualifications in Software Engineering and Computer Science." />
        <meta name="keywords" content="Software Engineering Education, Computer Science Degree, Technical Education, Professional Certifications" />
      </Helmet>
      <section id="education" className="education-section">
        <div className="education-content">
          <div className="education-header">
            <h2 className="section-title">Education</h2>
            <div className="section-line"></div>
          </div>

          <div className="education-timeline">
            <div className="education-card">
              <div className="education-card-content">
                <div className="education-year">2016 - 2019</div>
                <h3>Bachelor of Engineering in Computer Science</h3>
                <h4>Sant Longowal Institute Of Engineering And Technology</h4>
                <p className="education-location">Sangrur, Punjab</p>
                <div className="education-grade">
                  <span className="grade-label">CGPA</span>
                  <span className="grade-value">7.2</span>
                </div>
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-content">
                <div className="education-year">2012 - 2015</div>
                <h3>Diploma in Electronics Engineering</h3>
                <h4>University Polytechnic, Aligarh Muslim University</h4>
                <p className="education-location">Aligarh, UP</p>
                <div className="education-grade">
                  <span className="grade-label">Percentage</span>
                  <span className="grade-value">76.6%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education; 