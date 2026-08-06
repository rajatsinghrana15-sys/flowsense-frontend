import React from "react";
import "../style/FeaturesPage.css";
import {
  FaRobot,
  FaDiagramProject,
  FaTriangleExclamation,
  FaMagnifyingGlass,
  FaShieldHalved,
  FaChartColumn,
  FaLightbulb,
} from "react-icons/fa6";

const FeaturesPage = () => {
  return (
    <div className="features-page-wrapper">
      <div className="features-container">
        {/* Hero Section */}
        <section className="features-hero">
          <span className="features-badge">Capabilities</span>
          <h1 className="features-title">
            Enterprise-Grade Features for Deep Process Intelligence
          </h1>
          <p className="features-subtitle">
            Explore how FlowSense AI turns complex, fragmented operational data
            into actionable insights and automated efficiency.
          </p>
        </section>

        {/* 1. AI Process Discovery */}
        <section className="feature-section">
          <div className="feature-grid">
            <div className="feature-info">
              <div className="feature-icon-badge">
                <FaRobot />
              </div>
              <h2>AI Process Discovery</h2>
              <p>
                Automatically reconstructs actual business processes from
                activity logs without requiring manual documentation. FlowSense
                AI connects directly to your ERP, CRM, and custom databases to
                paint an accurate, real-time picture of how work gets done.
              </p>
            </div>
            <div className="feature-graphic">
              <div className="graphic-line">
                &gt; Connecting to system logs...
              </div>
              <div className="graphic-line">
                &gt; Reconstructing process execution path
              </div>
              <div className="graphic-line highlight">
                &gt; Status: 100% Process Map Discovered
              </div>
            </div>
          </div>
        </section>

        {/* 2. Process Flow Visualization */}
        <section className="feature-section">
          <div className="feature-grid">
            <div className="feature-info">
              <div className="feature-icon-badge">
                <FaDiagramProject />
              </div>
              <h2>Process Flow Visualization</h2>
              <p>
                Displays interactive process maps showing every activity,
                decision point, and workflow path. Easily zoom into individual
                case details or zoom out for a high-level overview of variations
                across departments.
              </p>
            </div>
            <div className="feature-graphic">
              <div className="graphic-line">
                [Start] ➔ (Task A: Order Received)
              </div>
              <div className="graphic-line highlight">
                &nbsp;&nbsp;↳ [Branch] ➔ (Task B: Verification)
              </div>
              <div className="graphic-line">
                &nbsp;&nbsp;↳ [Branch] ➔ (Task C: Approval) ➔ [End]
              </div>
            </div>
          </div>
        </section>

        {/* 3. Bottleneck Detection */}
        <section className="feature-section">
          <div className="feature-grid">
            <div className="feature-info">
              <div className="feature-icon-badge">
                <FaTriangleExclamation />
              </div>
              <h2>Bottleneck Detection</h2>
              <p>
                Identifies slow approvals, repetitive tasks, and workflow
                inefficiencies affecting productivity. Instantly spot high
                friction points causing work to stall.
              </p>
            </div>
            <div className="feature-graphic">
              <div className="graphic-line">
                &gt; Analyzing step execution times...
              </div>
              <div className="graphic-line alert">
                &gt; ALERT: Manager Approval Step (+48 hrs delay)
              </div>
              <div className="graphic-line">
                &gt; Impact: High queue formation detected
              </div>
            </div>
          </div>
        </section>

        {/* 4. Root Cause Analysis */}
        <section className="feature-section">
          <div className="feature-grid">
            <div className="feature-info">
              <div className="feature-icon-badge">
                <FaMagnifyingGlass />
              </div>
              <h2>Root Cause Analysis</h2>
              <p>
                Uses AI to identify why delays occur instead of simply reporting
                where they happen. Isolate whether bottlenecks are caused by
                resource shortages, system downtime, or missing documentation.
              </p>
            </div>
            <div className="feature-graphic">
              <div className="graphic-line">
                &gt; Correlating delay variables...
              </div>
              <div className="graphic-line highlight">
                &gt; Primary Factor: Missing Invoice Metadata
              </div>
              <div className="graphic-line">
                &gt; Secondary Factor: Unassigned Queue Items
              </div>
            </div>
          </div>
        </section>

        {/* 5. Compliance Monitoring */}
        <section className="feature-section">
          <div className="feature-grid">
            <div className="feature-info">
              <div className="feature-icon-badge">
                <FaShieldHalved />
              </div>
              <h2>Compliance Monitoring</h2>
              <p>
                Detects deviations from standard operating procedures and
                highlights compliance violations automatically before they lead
                to regulatory risks or financial losses.
              </p>
            </div>
            <div className="feature-graphic">
              <div className="graphic-line">
                &gt; Validating against SOP Policy v2.4
              </div>
              <div className="graphic-line alert">
                &gt; VIOLATION: Step "Dual Sign-off" bypassed
              </div>
              <div className="graphic-line">
                &gt; Flagged for Audit Team review
              </div>
            </div>
          </div>
        </section>

        {/* 6. KPI Dashboard */}
        <section className="feature-section">
          <div className="feature-grid">
            <div className="feature-info">
              <div className="feature-icon-badge">
                <FaChartColumn />
              </div>
              <h2>KPI Dashboard</h2>
              <p>
                Track operational health in real-time across key performance
                indicators to ensure your teams hit their performance targets.
              </p>

              <div className="metrics-grid">
                <div className="metric-card">
                  <span>Cycle Time</span>
                  <h4>4.2 Days</h4>
                </div>
                <div className="metric-card">
                  <span>Waiting Time</span>
                  <h4>1.1 Days</h4>
                </div>
                <div className="metric-card">
                  <span>Approval Time</span>
                  <h4>6 Hours</h4>
                </div>
                <div className="metric-card">
                  <span>Efficiency</span>
                  <h4>92.4%</h4>
                </div>
                <div className="metric-card">
                  <span>Automation</span>
                  <h4>68.0%</h4>
                </div>
              </div>
            </div>
            <div className="feature-graphic">
              <div className="graphic-line success">
                &gt; Overall System Health: OPTIMAL
              </div>
              <div className="graphic-line">
                &gt; Cycle Time decreased by 14% this month
              </div>
              <div className="graphic-line highlight">
                &gt; Automation Rate Target: On Track
              </div>
            </div>
          </div>
        </section>

        {/* 7. AI Recommendation Engine */}
        <section className="feature-section">
          <div className="feature-grid">
            <div className="feature-info">
              <div className="feature-icon-badge">
                <FaLightbulb />
              </div>
              <h2>AI Recommendation Engine</h2>
              <p>
                Provides smart, actionable recommendations to streamline
                operations and eliminate friction points:
              </p>

              <ul className="recommendations-list">
                <li className="recommendation-item">
                  <span>✓</span> Remove unnecessary approval steps
                </li>
                <li className="recommendation-item">
                  <span>✓</span> Automate repetitive activities
                </li>
                <li className="recommendation-item">
                  <span>✓</span> Redistribute workload across teams
                </li>
                <li className="recommendation-item">
                  <span>✓</span> Reduce overall waiting time
                </li>
              </ul>
            </div>
            <div className="feature-graphic">
              <div className="graphic-line highlight">
                &gt; AI Suggestion Ready
              </div>
              <div className="graphic-line success">
                &gt; Automating Tier-1 approvals can save ~120 hrs/mo
              </div>
              <div className="graphic-line">
                &gt; Click [Apply] to initiate workflow rule
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturesPage;
