import React from "react";
import {
  LayoutDashboard,
  Workflow,
  CheckSquare,
  BarChart2,
  Sparkles,
  FileText,
  Bell,
  User,
  Settings as SettingsIcon,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Cpu,
} from "lucide-react";

const UserSidebar = ({
  activeTab,
  setActiveTab,
  isCollapsed,
  setIsCollapsed,
}) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "my-processes", label: "My Processes", icon: Workflow },
    { id: "tasks", label: "Tasks", icon: CheckSquare },
    { id: "analytics", label: "Process Analytics", icon: BarChart2 },
    { id: "ai-insights", label: "AI Insights", icon: Sparkles },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];

  return (
    <aside
      className={`user-sidebar ${isCollapsed ? "user-sidebar-collapsed" : ""}`}
    >
      <div className="user-sidebar-header">
        <div className="user-sidebar-brand">
          <div className="user-sidebar-logo">
            <Cpu size={22} />
          </div>
          {!isCollapsed && (
            <span className="user-sidebar-brand-name">FlowSense AI</span>
          )}
        </div>
        <button
          className="user-sidebar-toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="user-sidebar-nav">
        <ul className="user-sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeTab === item.id ||
              (activeTab === "process-details" && item.id === "my-processes");
            return (
              <li className="user-sidebar-menu-item" key={item.id}>
                <button
                  className={`user-sidebar-link ${isActive ? "user-sidebar-link-active" : ""}`}
                  onClick={() => setActiveTab(item.id)}
                  title={isCollapsed ? item.label : ""}
                >
                  <Icon size={20} className="user-sidebar-icon" />
                  {!isCollapsed && (
                    <span className="user-sidebar-text">{item.label}</span>
                  )}
                  {isActive && (
                    <div className="user-sidebar-active-indicator" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="user-sidebar-footer">
        <button
          className="user-sidebar-logout-btn"
          title={isCollapsed ? "Logout" : ""}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="user-sidebar-text">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default UserSidebar;
