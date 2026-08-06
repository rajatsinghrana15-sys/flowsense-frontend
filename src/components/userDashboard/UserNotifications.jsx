import React, { useState } from "react";
import {
  Bell,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  UserCheck,
} from "lucide-react";

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Task Assigned",
      desc: 'You were assigned "Approve Vendor Invoice #882".',
      time: "15m ago",
      read: false,
      type: "info",
      icon: Bell,
    },
    {
      id: 2,
      title: "AI Detected Process Delay",
      desc: "Invoice Approval SLA delayed at verification step.",
      time: "2h ago",
      type: "warning",
      read: false,
      icon: AlertCircle,
    },
    {
      id: 3,
      title: "Report Generated Successfully",
      desc: "Your personal activity report is ready for export.",
      time: "1d ago",
      type: "success",
      read: true,
      icon: FileCheck,
    },
  ]);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="user-notifications-module">
      <div className="section-header flex-between">
        <div>
          <h2>Notifications</h2>
          <p>
            Stay informed about newly assigned tasks and process SLA updates.
          </p>
        </div>
        <button className="ghost-btn sm" onClick={markAllRead}>
          <UserCheck size={14} /> Mark All as Read
        </button>
      </div>

      <div className="glass-card notifications-card mt-16">
        <div className="notifications-list">
          {notifications.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.id}
                className={`notification-item ${item.type} ${!item.read ? "unread" : ""}`}
              >
                <div className={`notification-icon-wrapper ${item.type}`}>
                  <IconComp size={18} />
                </div>
                <div className="notification-content">
                  <div className="notification-header-row">
                    <h4>{item.title}</h4>
                    <span className="time-stamp">{item.time}</span>
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

export default UserNotifications;
