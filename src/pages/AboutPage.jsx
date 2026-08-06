import React from "react";
import "../style/AboutPage.css";
import {
  FaEye,
  FaBrain,
  FaRocket,
  FaBolt,
  FaBullseye,
  FaShieldAlt,
  FaCompass,
} from "react-icons/fa";

const coreValues = [
  { icon: <FaEye />, title: "Transparency" },
  { icon: <FaBrain />, title: "Intelligence" },
  { icon: <FaRocket />, title: "Innovation" },
  { icon: <FaBolt />, title: "Efficiency" },
  { icon: <FaBullseye />, title: "Simplicity" },
  { icon: <FaShieldAlt />, title: "Trust" },
];

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <span className="about-badge">About FlowSense AI</span>
          <h1 className="about-title">
            Bringing Absolute Clarity to Business Operations
          </h1>
          <p className="about-subtitle">
            We bridge the gap between process perception and process reality
            with AI-driven Process Mining.
          </p>
        </section>

        {/* Our Story Block */}
        <section className="story-card">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Most organizations document how they think their processes work,
              but reality is often very different. Hidden delays, unnecessary
              approvals, and manual tasks silently reduce productivity every
              day.
            </p>
            <p>
              FlowSense AI was built to reveal the true flow of work by
              automatically discovering business processes from operational
              data. By combining Artificial Intelligence with Process Mining,
              organizations gain complete visibility into their operations and
              make data-driven decisions to improve efficiency.
            </p>
          </div>
        </section>

        {/* Mission & Vision Grid */}
        <section className="mv-grid">
          <div className="mv-card">
            <div className="mv-icon">
              <FaBullseye />
            </div>
            <h3>Mission</h3>
            <p>
              Help organizations understand and optimize every business process
              through AI.
            </p>
          </div>

          <div className="mv-card">
            <div className="mv-icon">
              <FaCompass />
            </div>
            <h3>Vision</h3>
            <p>
              Become the world's leading AI-powered Process Mining Platform.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="values-section">
          <h2>Core Values</h2>
          <p>
            The principles that guide our product, engineering, and culture.
          </p>

          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h4>{value.title}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
