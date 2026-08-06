import React from "react";
import "../style/SolutionSection.css";
import { FaDatabase, FaChartLine, FaUsers, FaEnvelope } from "react-icons/fa";

const inputs = [
  {
    icon: <FaDatabase />,
    title: "ERP",
  },
  {
    icon: <FaChartLine />,
    title: "CRM",
  },
  {
    icon: <FaUsers />,
    title: "HRMS",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Logs",
  },
];

const outputs = [
  {
    title: "Process Discovery",
    desc: "Automatically map real business workflows.",
  },
  {
    title: "Bottleneck Detection",
    desc: "Find delays, rework and hidden process issues.",
  },
  {
    title: "AI Recommendations",
    desc: "Receive intelligent optimization suggestions.",
  },
];

const SolutionSection = () => {
  return (
    <section className="solution-section">
      <div className="solution-container">
        {/* Heading */}

        <div className="solution-header">
          <span className="solution-tag">AI Powered Process Mining</span>

          <h2 className="solution-title">Meet FlowSense AI</h2>

          <p className="solution-description">
            Connect your enterprise systems, discover how work really flows,
            detect bottlenecks automatically and optimize operations using
            Artificial Intelligence.
          </p>
        </div>

        {/* Architecture */}

        <div className="architecture">
          {/* Inputs */}

          <div className="architecture-top">
            {inputs.map((item, index) => (
              <div className="input-card" key={index}>
                <span className="input-icon">{item.icon}</span>

                <h4>{item.title}</h4>
              </div>
            ))}
          </div>

          {/* Data Line */}

          <div className="data-line">
            <div className="moving-dot"></div>
          </div>

          {/* AI Engine */}

          <div className="ai-engine">
            <div className="ring ring1"></div>

            <div className="ring ring2"></div>

            <div className="engine-core">
              <h3>FlowSense AI</h3>

              <p>AI Process Engine</p>
            </div>
          </div>

          {/* Second Line */}

          <div className="data-line">
            <div className="moving-dot reverse"></div>
          </div>

          {/* Outputs */}

          <div className="architecture-bottom">
            {outputs.map((item, index) => (
              <div className="output-card" key={index}>
                <div className="number">{index + 1}</div>

                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
