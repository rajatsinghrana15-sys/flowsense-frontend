import React, { useState, useEffect } from "react";
import { FiShield } from "react-icons/fi";

import Sidebar from "../components/ownerDashboard/Sidebar";
import DashboardNavbar from "../components/ownerDashboard/DashboardNavbar";
import StatsCards from "../components/ownerDashboard/StatsCards";
import ProcessOverview from "../components/ownerDashboard/ProcessOverview";
import CompanyAnalytics from "../components/ownerDashboard/CompanyAnalytics";
import ProcessMonitoring from "../components/ownerDashboard/ProcessMonitoring";
import AIInsights from "../components/ownerDashboard/AIInsights";
import UserManagement from "../components/ownerDashboard/UserManagement";
import Reports from "../components/ownerDashboard/Reports";
import Integrations from "../components/ownerDashboard/Integrations";
import Notifications from "../components/ownerDashboard/Notifications";
import Settings from "../components/ownerDashboard/Settings";

import "../style/OwnerDashboard.css";
import "../style/AddUserModal.css";

const OwnerDashboard = () => {
  const [activeTab, setActiveTab] = useState(
    () => localStorage.getItem("ownerActiveTab") || "dashboard",
  );

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    localStorage.setItem("ownerActiveTab", activeTab);
  }, [activeTab]);

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <div className="dashboard-welcome">
              <div className="welcome-text">
                <h2 className="welcome-heading">
                  <FiShield className="welcome-icon" />
                  Welcome back, Admin
                </h2>

                <p>
                  Monitor your organization's processes and optimize performance
                  with AI.
                </p>
              </div>
            </div>

            <StatsCards />

            <ProcessOverview />

            <div className="dashboard-grid-two">
              <AIInsights />
              <ProcessMonitoring limit={3} />
            </div>
          </>
        );

      case "analytics":
        return <CompanyAnalytics />;

      case "monitoring":
        return <ProcessMonitoring />;

      case "ai-insights":
        return <AIInsights />;

      case "users":
        return <UserManagement />;

      case "reports":
        return <Reports />;

      case "integrations":
        return <Integrations />;

      case "notifications":
        return <Notifications />;

      case "settings":
        return <Settings />;

      default:
        return (
          <>
            <StatsCards />
          </>
        );
    }
  };

  return (
    <div
      className={`owner-dashboard ${isCollapsed ? "sidebar-collapsed" : ""}`}
    >
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div className="dashboard-main">
        <DashboardNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="dashboard-content">{renderActiveTab()}</main>
      </div>
    </div>
  );
};

export default OwnerDashboard;
