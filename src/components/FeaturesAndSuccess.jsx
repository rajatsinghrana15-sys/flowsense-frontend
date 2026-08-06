import React from "react";
import {
  FaProjectDiagram,
  FaChartLine,
  FaExclamationTriangle,
  FaShieldAlt,
  FaBullseye,
  FaBalanceScale,
  FaTachometerAlt,
  FaLightbulb,
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../style/FeaturesAndSuccess.css";

const featuresData = [
  {
    icon: <FaProjectDiagram />,
    title: "AI Process Discovery",
  },
  {
    icon: <FaChartLine />,
    title: "Process Flow Visualization",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Bottleneck Detection",
  },
  {
    icon: <FaShieldAlt />,
    title: "Compliance Monitoring",
  },
  {
    icon: <FaBullseye />,
    title: "Root Cause Analysis",
  },
  {
    icon: <FaBalanceScale />,
    title: "Process Comparison",
  },
  {
    icon: <FaTachometerAlt />,
    title: "KPI Dashboard",
  },
  {
    icon: <FaLightbulb />,
    title: "AI Recommendations",
  },
  {
    icon: <FaFileAlt />,
    title: "Process Performance Reports",
  },
];

const howItWorksSteps = [
  {
    number: "01",
    title: "Connect Systems",
    desc: "ERP, CRM, HRMS & Email",
  },
  {
    number: "02",
    title: "Collect Logs",
    desc: "Gather activity events",
  },
  {
    number: "03",
    title: "AI Analysis",
    desc: "Discover real workflows",
  },
  {
    number: "04",
    title: "Find Bottlenecks",
    desc: "Detect delays & rework",
  },
  {
    number: "05",
    title: "Optimize",
    desc: "AI recommendations",
  },
];

const FeaturesAndSuccess = () => {
  const navigate = useNavigate();
  return (
    <section className="features-success-section" id="features">
      <div className="section-container">
        {/* 1. Feature Cards Grid */}
        <h2 className="section-title">Features</h2>
        <div className="features-grid">
          {featuresData.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
            </div>
          ))}
        </div>

        {/* 2. How It Works Flow */}
        <div className="how-it-works-container">
          <h2 className="section-title">How It Works</h2>
          <div className="flow-timeline">
            {howItWorksSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flow-step-card">
                  <div className="step-number">{step.number}</div>

                  <h4>{step.title}</h4>

                  <p>{step.desc}</p>
                </div>

                {idx !== howItWorksSteps.length - 1 && (
                  <div className="flow-line">
                    <span className="flow-dot"></span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3. Customer Success Comparison */}
        <div className="customer-success-container">
          <h2 className="section-title">Customer Success</h2>
          <div className="success-comparison-grid">
            {/* Before */}
            <div className="success-card before-card">
              <h3>Before FlowSense AI</h3>
              <div className="stat-item">
                <span>Approval Time:</span>
                <span>8 Days</span>
              </div>
              <div className="stat-item">
                <span>Process Visibility:</span>
                <span>35%</span>
              </div>
              <div className="stat-item">
                <span>Manual Reports:</span>
                <span>Yes</span>
              </div>
            </div>

            {/* After */}
            <div className="success-card after-card">
              <h3>After FlowSense AI</h3>
              <div className="stat-item">
                <span>Approval Time:</span>
                <span>3 Days</span>
              </div>
              <div className="stat-item">
                <span>Visibility:</span>
                <span>95%</span>
              </div>
              <div className="stat-item">
                <span>Reporting:</span>
                <span>Automated Insights</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Final CTA Banner */}
        <div className="cta-banner">
          <h2>Discover How Your Business Really Works.</h2>
          <button onClick={() => navigate("/contact")} className="cta-button">
            Book Demo
          </button>
          <div
            className="glow"
            style={{
              width: "140px",
              height: "140px",
              top: "20px",
              left: "60px",
            }}
          ></div>

          <div
            className="glow"
            style={{
              width: "90px",
              height: "90px",
              bottom: "40px",
              right: "80px",
              animationDelay: "2s",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndSuccess;
