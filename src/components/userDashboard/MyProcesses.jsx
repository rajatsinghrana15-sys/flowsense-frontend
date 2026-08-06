import React, { useState } from "react";
import { Clock, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

const MyProcesses = ({ limit, onViewDetails }) => {
  const [processes] = useState([
    {
      id: "PROC-101",
      name: "Order Processing",
      status: "Active",
      completion: 85,
      avgTime: "2.5 Days",
      delay: "None (On Schedule)",
    },
    {
      id: "PROC-102",
      name: "Invoice Approval",
      status: "Pending",
      completion: 60,
      avgTime: "3.2 Days",
      delay: "Manager Approval Pending",
    },
    {
      id: "PROC-103",
      name: "Vendor Onboarding Review",
      status: "Active",
      completion: 90,
      avgTime: "1.2 Days",
      delay: "None",
    },
    {
      id: "PROC-104",
      name: "Travel Expense Reimbursement",
      status: "Pending",
      completion: 45,
      avgTime: "4.0 Days",
      delay: "Receipt Verification SLA",
    },
  ]);

  const displayedProcesses = limit ? processes.slice(0, limit) : processes;

  return (
    <div className="glass-card my-processes-module">
      <div className="card-header">
        <div>
          <h3>My Assigned Processes</h3>
          <p className="card-subtitle">
            Track your operational pipelines and execution speed
          </p>
        </div>
      </div>

      <div className="process-cards-grid">
        {displayedProcesses.map((proc) => (
          <div key={proc.id} className="process-card">
            <div className="process-card-header">
              <h4 className="proc-title">{proc.name}</h4>
              <span className={`status-badge ${proc.status.toLowerCase()}`}>
                {proc.status === "Active" ? (
                  <CheckCircle2 size={12} />
                ) : (
                  <Clock size={12} />
                )}
                {proc.status}
              </span>
            </div>

            <div className="process-progress-section">
              <div className="progress-labels">
                <span>Completion</span>
                <span className="font-semibold">{proc.completion}%</span>
              </div>
              <div className="progress-bar-bg">
                <div
                  className={`progress-bar-fill ${proc.completion < 65 ? "warning" : ""}`}
                  style={{ width: `${proc.completion}%` }}
                />
              </div>
            </div>

            <div className="process-meta-grid">
              <div className="meta-item">
                <span className="meta-label">Average Time</span>
                <span className="meta-value">{proc.avgTime}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Current Bottleneck</span>
                <span
                  className={`meta-value ${proc.delay !== "None" && proc.delay !== "None (On Schedule)" ? "warning-text" : ""}`}
                >
                  {proc.delay !== "None" &&
                    proc.delay !== "None (On Schedule)" && (
                      <AlertTriangle size={12} />
                    )}
                  {proc.delay}
                </span>
              </div>
            </div>

            <div className="process-card-footer">
              <button
                className="secondary-btn sm full-width"
                onClick={() => onViewDetails && onViewDetails(proc.id)}
              >
                View Process Details <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProcesses;
