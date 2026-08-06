import React from "react";
import { Download, FileSpreadsheet, FileText } from "lucide-react";

const UserReports = () => {
  const reportsList = [
    {
      title: "My Performance Report",
      desc: "Summary of individual completion rates, SLA adherence, and speed.",
      updated: "Updated Today",
      size: "1.2 MB",
    },
    {
      title: "Process Activity Report",
      desc: "Detailed log of every process step executed this month.",
      updated: "Updated 2 days ago",
      size: "3.4 MB",
    },
    {
      title: "Task Completion Report",
      desc: "Itemized breakdown of completed vs pending assigned tasks.",
      updated: "Updated Aug 01, 2026",
      size: "890 KB",
    },
  ];

  return (
    <div className="user-reports-module">
      <div className="section-header">
        <h2>My Performance Reports</h2>
        <p>
          Export personal productivity audits and operational activity records.
        </p>
      </div>

      <div className="reports-grid">
        {reportsList.map((report, idx) => (
          <div key={idx} className="glass-card report-card">
            <div className="report-icon">
              <FileText size={24} />
            </div>
            <div className="report-body">
              <h4>{report.title}</h4>
              <p>{report.desc}</p>
              <div className="report-meta">
                <span>{report.updated}</span> • <span>{report.size}</span>
              </div>
            </div>
            <div className="report-actions">
              <button className="secondary-btn sm">
                <Download size={14} /> Download PDF
              </button>
              <button className="secondary-btn sm">
                <FileSpreadsheet size={14} /> Export CSV
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReports;
