import { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleDownloadResume = () => {
    // Add your resume file path here
    const resumeUrl = 'https://drive.google.com/file/d/1a-kgUDR6G1exZeNAV8L5h4XRvFTvKBYq/view?usp=drive_link';
    window.open(resumeUrl, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#home" className="nav-logo" onClick={handleLinkClick}>
          Aquif Zubair
        </a>
        <div className="nav-menu-wrapper">
          <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li><a href="#about" onClick={handleLinkClick}>About</a></li>
              <li><a href="#experience" onClick={handleLinkClick}>Experience</a></li>
              <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
              <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
            </ul>
          </div>
          <div className="nav-controls">
            <button onClick={handleDownloadResume} className="download-btn">
              <FaDownload className="download-icon" />
              Resume
            </button>
            <button 
              className={`menu-toggle ${menuOpen ? 'open' : ''}`}
              onClick={handleMenuClick}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 