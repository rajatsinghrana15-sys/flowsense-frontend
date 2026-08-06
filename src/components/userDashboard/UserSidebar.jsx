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
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="brand-logo">
          <div className="logo-icon">
            <Cpu size={22} />
          </div>
          {!isCollapsed && <span className="brand-name">FlowSense AI</span>}
        </div>
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeTab === item.id ||
              (activeTab === "process-details" && item.id === "my-processes");
            return (
              <li key={item.id}>
                <button
                  className={`nav-item ${isActive ? "active" : ""}`}
                  onClick={() => setActiveTab(item.id)}
                  title={isCollapsed ? item.label : ""}
                >
                  <Icon size={20} className="nav-icon" />
                  {!isCollapsed && <span>{item.label}</span>}
                  {isActive && <div className="active-indicator" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" title={isCollapsed ? "Logout" : ""}>
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default UserSidebar;
