import React from "react";
import { Sparkles, ArrowRight, Zap, AlertTriangle } from "lucide-react";

const AIInsights = () => {
  const recommendations = [
    {
      id: 1,
      issue: "Invoice approval is delayed by 3 days at step 2.",
      recommendation:
        "Automate verification step using FlowSense AI OCR and reduce multi-tier approval chain.",
      priority: "High",
      impactScore: "89%",
    },
    {
      id: 2,
      issue: "High abandonment rate during Customer Onboarding KYC.",
      recommendation: "Enable instant auto-KYC integration via API gateway.",
      priority: "Medium",
      impactScore: "74%",
    },
  ];

  return (
    <div className="owner-ai-insights glass-card ai-insights-container">
      <div className="owner-card-header card-header">
        <div className="owner-header-badge header-with-badge">
          <div className="owner-ai-badge ai-badge-icon">
            <Sparkles size={18} />
          </div>
          <div>
            <h3>AI Recommendations & Bottlenecks</h3>
            <p className="card-subtitle">
              Generative process intelligence insights based on system logs
            </p>
          </div>
        </div>
      </div>

      <div className="owner-insights-list insights-list">
        {recommendations.map((rec) => (
          <div key={rec.id} className="owner-insight-card insight-card">
            <div className="owner-insight-top insight-top">
              <span
                className={`owner-priority-tag priority-tag ${rec.priority.toLowerCase()}`}
              >
                {rec.priority} Priority
              </span>
              <span className="owner-impact-badge impact-badge">
                <Zap size={12} fill="currentColor" /> +{rec.impactScore} Speedup
              </span>
            </div>

            <div className="owner-insight-body insight-body">
              <div className="owner-issue-row issue-row">
                <AlertTriangle size={16} className="issue-icon" />
                <p className="owner-issue-text issue-text">{rec.issue}</p>
              </div>
              <div className="owner-recommendation recommendation-row">
                <strong>AI Action Plan:</strong> {rec.recommendation}
              </div>
            </div>

            <div className="owner-insight-actions insight-actions">
              <button className="owner-primary-btn primary-btn sm">
                Apply Fix <ArrowRight size={14} />
              </button>
              <button className="owner-ghost-btn ghost-btn sm">Dismiss</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIInsights;
