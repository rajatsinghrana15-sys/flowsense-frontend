import React from "react";
import "../style/ProblemSection.css";

const problems = [
  "Manual approvals causing delays",
  "Employees skipping process steps",
  "Departments working in isolation",
  "Duplicate work",
  "Hidden bottlenecks",
  "Lack of process transparency",
  "Difficult compliance tracking",
];

const ProblemSection = () => {
  return (
    <section className="problem-section" id="problem">
      <div className="problem-container">
        {/* Top Header */}
        <div className="problem-header">
          <span className="problem-tag">The Hidden Cost</span>
          <h2 className="problem-title">
            The Hidden Cost of Invisible Processes
          </h2>
          <p className="problem-subtitle">
            Most companies believe they know how work flows inside their
            organization.
          </p>
          <p className="problem-reality">Reality is different.</p>
        </div>

        <div className="problem-grid">
          {/* Left Column: Problems List */}
          <div className="problems-list">
            {problems.map((item, index) => (
              <div key={index} className="problem-item">
                <span className="problem-icon">✕</span>
                <p className="problem-text">{item}</p>
              </div>
            ))}
          </div>

          {/* Right Column: Illustration (Expected vs Actual Process) */}
          <div className="comparison-card">
            {/* Expected Process */}
            <div className="process-box expected-box">
              <div className="process-title">Expected Process</div>
              {/* <div className="flow-straight">
                <span className="flow-step">Step 1</span>
                <span>➔</span>
                <span className="flow-step">Step 2</span>
                <span>➔</span>
                <span className="flow-step">Step 3</span>
              </div> */}
              <div className="workflow">
                <div className="node">Start</div>
                <div className="line"></div>

                <div className="node active">AI</div>
                <div className="line"></div>

                <div className="node">Review</div>
                <div className="line"></div>

                <div className="node">End</div>

                <div className="moving-dot"></div>
              </div>
            </div>

            {/* Separator Arrow */}
            <div className="arrow-down">↓</div>

            {/* Actual Process */}
            <div className="process-box actual-box">
              <div className="process-title">
                Actual Process (Messy Reality)
              </div>
              {/* <div className="flow-messy">
                <span className="messy-step">Step 1</span>
                <span>➔</span>
                <span className="messy-step step-warning">Bypass</span>
                <span>➔</span>
                <span className="messy-step step-red">Delay</span>
                <span>➔</span>
                <span className="messy-step">Loopback</span>
                <span>➔</span>
                <span className="messy-step step-red">Step 3</span>
              </div> */}
              <div className="workflow messy">
                <div className="node">Start</div>

                <div className="line"></div>

                <div className="node warning">Delay</div>

                <div className="line"></div>

                <div className="node danger">Loop</div>

                <div className="line"></div>

                <div className="node">End</div>

                <div className="moving-dot"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
