import React, { useState } from "react";
import {
  Database,
  Server,
  Cpu,
  Cloud,
  CheckCircle,
  RefreshCw,
  ExternalLink,
} from "lucide-react";

const Integrations = () => {
  const [integrations] = useState([
    {
      name: "SAP Enterprise ERP",
      category: "ERP",
      status: "Connected",
      lastSync: "10 mins ago",
      icon: Server,
    },
    {
      name: "Salesforce CRM",
      category: "CRM",
      status: "Connected",
      lastSync: "1 hour ago",
      icon: Cloud,
    },
    {
      name: "Workday HRMS",
      category: "HRMS",
      status: "Connected",
      lastSync: "30 mins ago",
      icon: Cpu,
    },
    {
      name: "PostgreSQL Process Logs",
      category: "Database",
      status: "Connected",
      lastSync: "Just now",
      icon: Database,
    },
    {
      name: "Custom REST API Gateway",
      category: "API",
      status: "Needs Setup",
      lastSync: "Never",
      icon: RefreshCw,
    },
  ]);

  return (
    <div className="owner-integrations-module integrations-module">
      <div className="owner-section-header section-header">
        <h2>Enterprise Integrations</h2>
        <p>
          Connect your business execution logs, ERPs, and databases seamlessly.
        </p>
      </div>

      <div className="owner-integrations-grid integrations-grid">
        {integrations.map((item, index) => {
          const IconComp = item.icon;
          const isConnected = item.status === "Connected";
          return (
            <div
              key={index}
              className="owner-integration-card glass-card integration-card"
            >
              <div className="owner-card-top card-top">
                <div className="owner-integration-icon integration-icon">
                  <IconComp size={22} />
                </div>
                <span
                  className={`owner-status-badge status-badge ${isConnected ? "success" : "neutral"}`}
                >
                  {isConnected ? <CheckCircle size={12} /> : null}
                  {item.status}
                </span>
              </div>
              <div className="owner-card-mid card-mid">
                <h4>{item.name}</h4>
                <span className="owner-category-tag category-tag">
                  {item.category}
                </span>
              </div>
              <div className="owner-card-bottom card-bottom">
                <span className="owner-sync-text sync-text">
                  Last Sync: {item.lastSync}
                </span>
                <button className="owner-ghost-btn ghost-btn sm">
                  Configure <ExternalLink size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Integrations;
