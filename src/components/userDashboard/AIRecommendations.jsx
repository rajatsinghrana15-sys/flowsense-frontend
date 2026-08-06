import React from "react";
import { Sparkles, Zap, AlertTriangle, ArrowRight } from "lucide-react";

const AIRecommendations = ({ limit }) => {
  const recommendations = [
    {
      id: 1,
      detected: "Your invoice approval tasks are delayed by ~1.2 days.",
      recommendation:
        "Complete verification tasks first to significantly improve overall cycle time.",
      priority: "High Priority",
      impact: "28% Faster Cycle Time",
    },
    {
      id: 2,
      detected: "Repetitive manual data entry found in Vendor Onboarding.",
      recommendation:
        "Use FlowSense AI Smart Autofill to ingest PDF invoice data automatically.",
      priority: "Medium Priority",
      impact: "15 Mins Saved / Task",
    },
  ];

  const displayedList = limit
    ? recommendations.slice(0, limit)
    : recommendations;

  return (
    <div className="glass-card ai-recommendations-module">
      <div className="card-header">
        <div className="header-with-badge">
          <div className="ai-badge-icon">
            <Sparkles size={18} />
          </div>
          <div>
            <h3>AI Insights & Recommendations</h3>
            <p className="card-subtitle">
              Personal copilot insights to optimize daily throughput
            </p>
          </div>
        </div>
      </div>

      <div className="recommendations-list">
        {displayedList.map((item) => (
          <div key={item.id} className="recommendation-item-card">
            <div className="rec-top">
              <span className="priority-tag high">{item.priority}</span>
              <span className="impact-badge">
                <Zap size={12} /> {item.impact}
              </span>
            </div>

            <div className="rec-body">
              <div className="issue-row">
                <AlertTriangle size={15} className="issue-icon" />
                <p>
                  <strong>AI Detected:</strong> "{item.detected}"
                </p>
              </div>
              <p className="rec-text">
                <strong>Recommendation:</strong> {item.recommendation}
              </p>
            </div>

            <div className="rec-footer">
              <button className="primary-btn sm">
                Apply AI Fix <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;
