import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#product-tour">Product Tour</a>
              </li>
              <li>
                <a href="#integrations">Integrations</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li>
                <a href="#manufacturing">Manufacturing</a>
              </li>
              <li>
                <a href="#banking">Banking</a>
              </li>
              <li>
                <a href="#healthcare">Healthcare</a>
              </li>
              <li>
                <a href="#logistics">Logistics</a>
              </li>
              <li>
                <a href="#government">Government</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#documentation">Documentation</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#case-studies">Case Studies</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>FlowSense AI</span>
          <span>© 2026 FlowSense AI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
