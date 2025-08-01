import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <Link to="/" className="footer-logo">
            <span className="logo-text">{companyInfo.name}</span>
          </Link>
          <p className="footer-description">
            Empowering businesses with innovative software solutions for over 5 years.
            Building trust and long-term partnerships through excellence.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><Link to="/services" className="footer-link">Custom Software Development</Link></li>
            <li><Link to="/services" className="footer-link">Dedicated Teams</Link></li>
            <li><Link to="/services" className="footer-link">Startup Support</Link></li>
            <li><Link to="/services" className="footer-link">Consulting</Link></li>
          </ul>
        </div>

        {/* Technologies */}
        <div className="footer-section">
          <h3 className="footer-title">Technologies</h3>
          <ul className="footer-links">
            <li><span className="footer-link">Python & Django</span></li>
            <li><span className="footer-link">JavaScript & React</span></li>
            <li><span className="footer-link">C++ Development</span></li>
            <li><span className="footer-link">Cloud & DevOps</span></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={16} />
              <span>contact@softdab.com</span>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>Global Remote Team</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p className="copyright">
            © 2025 {companyInfo.name}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-bottom-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;