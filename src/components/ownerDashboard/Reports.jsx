import React from "react";
import {
  Download,
  FileSpreadsheet,
  FileText,
  CheckCircle2,
} from "lucide-react";

const Reports = () => {
  const reportsList = [
    {
      title: "Process Performance Report",
      description: "Deep dive into throughput rates and execution cycles.",
      date: "Updated 2h ago",
      size: "2.4 MB",
    },
    {
      title: "Efficiency & Cost Savings Report",
      description: "Quantified automated ROI and labor cost reductions.",
      date: "Updated Yesterday",
      size: "4.1 MB",
    },
    {
      title: "Compliance & Audit Trail",
      description: "Complete log of process SLA adherence and overrides.",
      date: "Updated Aug 1, 2026",
      size: "1.8 MB",
    },
    {
      title: "Executive Operations Summary",
      description: "High-level board deck analysis on operational speed.",
      date: "Updated July 28, 2026",
      size: "5.2 MB",
    },
  ];

  return (
    <div className="owner-reports-module reports-module">
      <div className="owner-section-header section-header">
        <h2>Process Intelligence Reports</h2>
        <p>
          Export audited records, efficiency breakdowns, and executive
          summaries.
        </p>
      </div>

      <div className="owner-reports-grid reports-grid">
        {reportsList.map((report, idx) => (
          <div key={idx} className="owner-report-card glass-card report-card">
            <div className="owner-report-icon report-icon">
              <FileText size={24} />
            </div>

            <div className="owner-report-body report-body">
              <h4>{report.title}</h4>
              <p>{report.description}</p>

              <div className="owner-report-meta report-meta">
                <span>{report.date}</span>
                <span>•</span>
                <span>{report.size}</span>
              </div>
            </div>

            <div className="owner-report-actions report-actions">
              <button className="owner-secondary-btn secondary-btn sm">
                <Download size={14} />
                PDF
              </button>

              <button className="owner-secondary-btn secondary-btn sm">
                <FileSpreadsheet size={14} />
                Excel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
