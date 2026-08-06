import React from "react";
import {
  FaIndustry,
  FaUniversity,
  FaHospital,
  FaTruck,
  FaShieldAlt,
  FaLandmark,
  FaBolt,
  FaEye,
  FaChartLine,
  FaBullseye,
} from "react-icons/fa";
import "../style/SolutionsPage.css";

const industrySolutions = [
  {
    icon: <FaIndustry />,
    title: "Manufacturing",
    problem: "Production delays, inventory buildup, and inefficient workflows.",
    solution: "AI maps production processes using ERP and machine event data.",
    benefits: [
      "30% Faster Production",
      "Lower Bottlenecks",
      "Better Visibility",
    ],
  },

  {
    icon: <FaUniversity />,
    title: "Banking",
    problem: "Slow loan approvals and compliance challenges.",
    solution: "AI tracks loan workflows and detects policy deviations.",
    benefits: [
      "Faster Loan Approval",
      "Improved Compliance",
      "Reduced Operational Risk",
    ],
  },

  {
    icon: <FaHospital />,
    title: "Healthcare",
    problem: "Patient delays and complex hospital workflows.",
    solution: "AI visualizes patient journeys and treatment processes.",
    benefits: [
      "Reduced Wait Time",
      "Better Resource Allocation",
      "Higher Patient Satisfaction",
    ],
  },

  {
    icon: <FaTruck />,
    title: "Logistics",
    problem: "Shipment delays and warehouse bottlenecks.",
    solution: "AI tracks logistics workflows across supply chains.",
    benefits: ["Faster Delivery", "Optimized Warehouses", "Real-time Tracking"],
  },

  {
    icon: <FaShieldAlt />,
    title: "Insurance",
    problem: "Slow claim processing and fraud risks.",
    solution: "AI detects redundant claim steps and anomalies.",
    benefits: ["Faster Claims", "Reduced Costs", "Fraud Detection"],
  },

  {
    icon: <FaLandmark />,
    title: "Government",
    problem: "Slow approvals and paper-heavy processes.",
    solution: "AI provides transparent workflow monitoring.",
    benefits: [
      "Faster Citizen Services",
      "Better Transparency",
      "SLA Compliance",
    ],
  },
];

const SolutionsPage = () => {
  return (
    <div className="solutions-page-wrapper">
      <div className="solutions-container">
        {/* Hero Section */}
        <section className="solutions-hero">
          <span className="solutions-badge">Industry Solutions</span>
          <h1 className="solutions-title">
            Industry-Specific Solutions for Real Business Impact
          </h1>
          <p className="solutions-subtitle">
            Different industries face unique operational challenges. FlowSense
            AI helps organizations overcome process complexity with AI-powered
            process mining and actionable insights.
          </p>
        </section>

        {/* Industry Cards Grid */}
        <section>
          <div className="industry-grid">
            {industrySolutions.map((item, index) => (
              <div key={index} className="industry-card">
                <div className="industry-card-header">
                  <div className="industry-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                </div>

                <div className="industry-card-body">
                  <div className="info-block">
                    <label className="label-problem">
                      Industry-Specific Problem
                    </label>
                    <p>{item.problem}</p>
                  </div>

                  <div className="info-block">
                    <label className="label-solution">
                      AI-Powered Solution
                    </label>
                    <p>{item.solution}</p>
                  </div>

                  <div className="info-block">
                    <label className="label-benefits">
                      Expected Business Benefits
                    </label>
                    <ul className="benefits-list">
                      {item.benefits.map((benefit, bIdx) => (
                        <li key={bIdx}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Industry Leaders Choose FlowSense */}
        <section className="value-section">
          <h2>Why Industry Leaders Choose FlowSense AI</h2>
          <div className="value-grid">
            <div className="value-box">
              <span>
                <FaBolt />
              </span>
              <h4>Faster Execution</h4>
            </div>
            <div className="value-box">
              <span>
                <FaEye />
              </span>
              <h4>Better Visibility</h4>
            </div>
            <div className="value-box">
              <span>
                <FaChartLine />
              </span>
              <h4>Reduced Delays</h4>
            </div>
            <div className="value-box">
              <span>
                <FaShieldAlt />
              </span>
              <h4>Better Compliance</h4>
            </div>
            <div className="value-box">
              <span>
                <FaBullseye />
              </span>
              <h4>Data-Driven Decisions</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SolutionsPage;
