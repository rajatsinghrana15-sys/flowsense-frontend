import React from "react";
import {
  Bell,
  AlertCircle,
  FileCheck,
  UserPlus,
  CheckCircle2,
} from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: "New Bottleneck Detected",
      desc: "Order fulfillment SLA exceeded by 18 minutes.",
      time: "10m ago",
      type: "warning",
      icon: AlertCircle,
    },
    {
      id: 2,
      title: "Monthly Report Generated",
      desc: "July 2026 Process Mining Summary is available.",
      time: "1h ago",
      type: "info",
      icon: FileCheck,
    },
    {
      id: 3,
      title: "New User Joined",
      desc: "Michael Chen added to Operations team.",
      time: "3h ago",
      type: "success",
      icon: UserPlus,
    },
    {
      id: 4,
      title: "Integration Sync Complete",
      desc: "SAP ERP successfully ingested 42k logs.",
      time: "5h ago",
      type: "success",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="owner-notifications-module notifications-module">
      <div className="owner-section-header section-header">
        <h2>Notifications & Alerts</h2>
        <p>
          Real-time system events, AI bottleneck triggers, and administrative
          alerts.
        </p>
      </div>

      <div className="owner-notifications-card glass-card notifications-card">
        <div className="owner-notifications-list notifications-list">
          {notifications.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`owner-notification-item notification-item ${item.type}`}
              >
                <div
                  className={`owner-notification-icon notification-icon-wrapper ${item.type}`}
                >
                  <IconComp size={20} />
                </div>
                <div className="owner-notification-content notification-content">
                  <div className="owner-notification-header notification-header-row">
                    <h4>{item.title}</h4>
                    <span className="owner-time-stamp time-stamp">
                      {item.time}
                    </span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
