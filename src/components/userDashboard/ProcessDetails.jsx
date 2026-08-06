import React from "react";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const ProcessDetails = ({ processId, onBack }) => {
  // Sample process timeline details
  const processDetailData = {
    id: processId || "PROC-102",
    name: "Invoice Approval Process",
    status: "Pending Step 3",
    owner: "Amit Kumar",
    avgCycleTime: "3.2 Days",
    steps: [
      {
        id: 1,
        title: "Request Created",
        status: "Completed",
        timestamp: "10 Aug 2026, 09:30 AM",
        note: "Created by Purchasing Dept.",
      },
      {
        id: 2,
        title: "Manager Approval",
        status: "Completed",
        timestamp: "11 Aug 2026, 02:15 PM",
        note: "Approved by Sarah Jenkins",
      },
      {
        id: 3,
        title: "Verification",
        status: "In Progress",
        timestamp: "Current Step",
        note: "Pending tax & audit compliance review.",
      },
      {
        id: 4,
        title: "Disbursement Completed",
        status: "Pending",
        timestamp: "Scheduled",
        note: "Automated bank dispatch",
      },
    ],
    delayInfo:
      "Verification step is taking 1.2 days longer than the target SLA.",
  };

  return (
    <div className="process-details-module">
      <div className="details-header">
        <button className="ghost-btn sm" onClick={onBack}>
          <ArrowLeft size={16} /> Back to My Processes
        </button>
        <div className="header-title-block mt-12">
          <h2>
            {processDetailData.name} ({processDetailData.id})
          </h2>
          <span className="status-badge warning">
            {processDetailData.status}
          </span>
        </div>
      </div>

      <div className="dashboard-grid-two">
        <div className="glass-card timeline-card">
          <h3>Process Lifecycle Timeline</h3>
          <p className="card-subtitle">
            Real-time status tracking across sequential steps
          </p>

          <div className="timeline-container">
            {processDetailData.steps.map((step, idx) => {
              const isCompleted = step.status === "Completed";
              const isInProgress = step.status === "In Progress";
              return (
                <div
                  key={step.id}
                  className={`timeline-item ${step.status.toLowerCase().replace(" ", "-")}`}
                >
                  <div className="timeline-node">
                    {isCompleted ? (
                      <CheckCircle size={18} />
                    ) : isInProgress ? (
                      <Clock size={18} />
                    ) : (
                      idx + 1
                    )}
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{step.title}</h4>
                      <span className="timeline-time">{step.timestamp}</span>
                    </div>
                    <p className="timeline-note">{step.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-card info-card">
          <h3>SLA & Bottleneck Diagnostics</h3>
          <p className="card-subtitle">
            AI process mining diagnostics for this instance
          </p>

          <div className="delay-alert-box">
            <AlertCircle size={20} className="warning-icon" />
            <div>
              <strong>Delay Detected:</strong>
              <p>{processDetailData.delayInfo}</p>
            </div>
          </div>

          <div className="ai-suggestion-box mt-16">
            <div className="ai-head">
              <Sparkles size={16} />
              <span>AI Process Optimization Tip</span>
            </div>
            <p>
              You can bypass manual verification for trusted vendors with
              invoice amounts below $1,000 by requesting express tier approval.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessDetails;
