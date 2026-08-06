import React, { useState, useEffect } from "react";
import {
  Search,
  Sparkles,
  Bell,
  Sun,
  Moon,
  User,
  ChevronDown,
} from "lucide-react";

const DashboardNavbar = ({ activeTab, setActiveTab }) => {
  const [owner, setOwner] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      setOwner(user);
    }
  }, []);

  return (
    <header className="owner-navbar navbar">
      <div className="navbar-left">
        <div className="owner-search-bar search-bar">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search processes, logs, analytics, users..."
          />
        </div>
      </div>

      <div className="owner-navbar-right navbar-right">
        <button
          className="owner-ai-btn ai-assistant-btn"
          onClick={() => setActiveTab("ai-insights")}
        >
          <Sparkles size={16} />
          <span>AI Assistant</span>
        </button>

        <button
          className="owner-icon-btn icon-btn theme-toggle"
          onClick={() => {
            setDarkMode(!darkMode);

            document.body.classList.toggle("dark-theme");
          }}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="owner-icon-btn notification-trigger"
          onClick={() => setActiveTab("notifications")}
        >
          <Bell size={18} />
          <span className="badge">3</span>
        </button>

        <div className="owner-profile profile-dropdown-container">
          <button
            className="profile-btn"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="avatar">
              <User size={20} />
            </div>
            <div className="profile-info">
              <span className="profile-name">{owner?.name}</span>
              <span className="profile-role">{owner?.role}</span>
            </div>
            <ChevronDown size={14} className="dropdown-arrow" />
          </button>

          {showProfileMenu && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                <p className="user-email">{owner?.email}</p>
              </div>
              <hr />
              <button
                onClick={() => {
                  setActiveTab("settings");
                  setShowProfileMenu(false);
                }}
              >
                Account Settings
              </button>

              <button onClick={() => setShowProfileMenu(false)}>
                Help & Documentation
              </button>
              <hr />
              <button
                className="danger-text"
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");

                  window.location.href = "/login";
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
