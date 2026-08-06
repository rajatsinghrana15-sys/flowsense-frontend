import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left Content Area */}
        <div className="hero-content">
          <h1 className="hero-title">
            Your Business Process Isn't What You{" "}
            <span className="hero-accent">Think It Is.</span>
          </h1>

          <p className="hero-description">
            Automatically discover, visualize, and optimize business processes
            using AI-powered process mining. Eliminate bottlenecks, reduce
            delays, and improve operational efficiency.
          </p>

          <div className="hero-actions">
            <button
              onClick={() => navigate("/contact")}
              className="btn-primary-hero"
            >
              Book Demo
            </button>
            <button
              onClick={() => navigate("/livedemo")}
              className="btn-secondary-hero"
            >
              <span className="play-icon">▶</span> Watch Live Demo
            </button>
          </div>
        </div>

        {/* Right Product Preview / Analytics Mockup */}
        <div className="hero-visual">
          <div className="dashboard-card">
            {/* Top Bar of Dashboard */}
            <div className="dashboard-header">
              <div className="dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="dash-title">FlowSense Process Analytics</span>
            </div>

            {/* Quick Metrics */}
            <div className="dash-stats">
              <div className="stat-box">
                <div className="stat-label">Efficiency</div>
                <div className="stat-value highlight">+34%</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Cycle Time</div>
                <div className="stat-value">2.4 Days</div>
              </div>
              <div className="stat-box">
                <div className="stat-label">Automation</div>
                <div className="stat-value">82%</div>
              </div>
            </div>

            {/* Simulated Process Flow Diagram */}
            <div className="process-flow">
              <div className="node">Order Entry</div>
              <div className="connector"></div>
              <div className="node active">AI Analysis</div>
              <div className="connector"></div>
              <div className="node">Fulfillment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
