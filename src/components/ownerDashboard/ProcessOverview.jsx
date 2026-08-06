import React from "react";
import { ArrowUpRight, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";

const ProcessOverview = () => {
  const topProcesses = [
    {
      name: "Invoice Approval Process",
      executionCount: "12,450",
      avgDuration: "1.2h",
      efficiency: 84,
      status: "Active",
    },
    {
      name: "Customer Onboarding Pipeline",
      executionCount: "8,920",
      avgDuration: "4.5h",
      efficiency: 91,
      status: "Active",
    },
    {
      name: "Order Fulfillment Loop",
      executionCount: "24,100",
      avgDuration: "2.8h",
      efficiency: 68,
      status: "Attention",
    },
  ];

  return (
    <div className="owner-process-overview glass-card process-overview-card">
      <div className="owner-card-header card-header">
        <div>
          <h3>High-Volume Process Health</h3>
          <p className="owner-card-subtitle card-subtitle">
            Real-time telemetry across primary organizational workflows
          </p>
        </div>

        <button className="owner-view-all-btn view-all-btn">
          View All Logs <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="owner-overview-list overview-list">
        {topProcesses.map((proc, index) => (
          <div key={index} className="owner-overview-item overview-item">
            <div className="owner-overview-info overview-info">
              <span className="owner-proc-name proc-name">{proc.name}</span>

              <span className="owner-proc-meta proc-meta">
                {proc.executionCount} executions this month
              </span>
            </div>

            <div className="owner-overview-stat overview-stat">
              <Clock size={16} className="owner-text-muted text-muted" />
              <span>{proc.avgDuration} avg</span>
            </div>

            <div className="owner-overview-progress overview-progress">
              <div className="owner-progress-labels progress-labels">
                <span>Efficiency</span>
                <span>{proc.efficiency}%</span>
              </div>

              <div className="owner-progress-bar-bg progress-bar-bg">
                <div
                  className={`owner-progress-bar-fill progress-bar-fill ${
                    proc.efficiency < 75 ? "warning" : ""
                  }`}
                  style={{ width: `${proc.efficiency}%` }}
                />
              </div>
            </div>

            <div className="owner-overview-status overview-status">
              {proc.status === "Active" ? (
                <span className="owner-status-badge status-badge success">
                  <CheckCircle2 size={12} />
                  Optimal
                </span>
              ) : (
                <span className="owner-status-badge status-badge warning">
                  <AlertTriangle size={12} />
                  Bottleneck
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessOverview;
