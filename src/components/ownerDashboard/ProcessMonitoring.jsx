import React, { useState } from "react";
import {
  Play,
  Pause,
  AlertCircle,
  CheckCircle,
  Clock,
  ChevronRight,
} from "lucide-react";

const ProcessMonitoring = ({ limit }) => {
  const [processes] = useState([
    {
      id: 1,
      name: "Order Processing",
      status: "Running",
      completion: 92,
      avgTime: "45 mins",
      bottleneck: "Inventory Check SLA",
    },
    {
      id: 2,
      name: "Invoice Approval",
      status: "Running",
      completion: 84,
      avgTime: "3.2 days",
      bottleneck: "Manager Approval Queue",
    },
    {
      id: 3,
      name: "Customer Onboarding",
      status: "Running",
      completion: 76,
      avgTime: "1.5 days",
      bottleneck: "KYC Document Verification",
    },
    {
      id: 4,
      name: "Employee Offboarding",
      status: "Paused",
      completion: 40,
      avgTime: "5.0 days",
      bottleneck: "IT Asset Handover",
    },
  ]);

  const displayedProcesses = limit ? processes.slice(0, limit) : processes;

  return (
    <div className="owner-process-monitoring glass-card process-monitoring-module">
      <div className="owner-card-header card-header">
        <div>
          <h3>Active Business Processes</h3>
          <p className="card-subtitle">
            Live execution telemetry & path bottleneck detection
          </p>
        </div>
      </div>

      <div className="owner-process-cards process-cards-container">
        {displayedProcesses.map((proc) => (
          <div
            key={proc.id}
            className="owner-process-card process-monitor-card"
          >
            <div className="owner-proc-header proc-header">
              <h4 className="owner-proc-title proc-title">{proc.name}</h4>
              <span
                className={`owner-status-pill status-pill ${proc.status.toLowerCase()}`}
              >
                {proc.status === "Running" ? (
                  <Play size={10} />
                ) : (
                  <Pause size={10} />
                )}
                {proc.status}
              </span>
            </div>

            <div className="owner-proc-metrics proc-metrics">
              <div className="owner-metric metric">
                <span className="owner-metric-label metric-label">
                  Completion
                </span>
                <span className="owner-metric-value metric-value">
                  {proc.completion}%
                </span>
              </div>
              <div className="metric">
                <span className="metric-label">Avg Duration</span>
                <span className="metric-value">{proc.avgTime}</span>
              </div>
            </div>

            <div className="owner-bottleneck-box proc-bottleneck-box">
              <AlertCircle size={14} className="warning-icon" />
              <div className="owner-bottleneck-text bottleneck-text">
                <span className="lbl">Current Bottleneck:</span>
                <span className="val">{proc.bottleneck}</span>
              </div>
            </div>

            <div className="owner-proc-footer proc-card-footer">
              <button className="owner-text-link-btn text-link-btn">
                Analyze Process Mining Graph <ChevronRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessMonitoring;
