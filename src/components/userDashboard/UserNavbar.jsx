import React, { useState } from "react";
import {
  Search,
  Sparkles,
  Bell,
  Sun,
  Moon,
  User,
  ChevronDown,
} from "lucide-react";

const UserNavbar = ({ setActiveTab, userData }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [search, setSearch] = useState("");
  const notifications = [];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/user-login";
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search processes, tasks, or reports..."
          />
        </div>
      </div>

      <div className="navbar-right">
        <button
          className="ai-assistant-btn"
          onClick={() => setActiveTab("ai-insights")}
        >
          <Sparkles size={16} />
          <span>AI Copilot</span>
        </button>

        <button
          className="icon-btn theme-toggle"
          onClick={() => {
            setDarkMode(!darkMode);
            document.body.classList.toggle("dark-theme");
          }}
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="icon-btn notification-trigger"
          onClick={() => setActiveTab("notifications")}
        >
          <Bell size={18} />
          <span className="badge">{notifications.length}</span>
        </button>

        <div className="profile-dropdown-container">
          <button
            className="profile-btn"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="avatar">
              {userData?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div className="profile-info">
              <span className="profile-name">{userData?.name}</span>

              <span className="profile-role">{userData?.role}</span>
            </div>
            <ChevronDown size={14} className="dropdown-arrow" />
          </button>

          {showProfileMenu && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                <p className="user-email">{userData?.email}</p>
                <span className="user-dept">{userData?.department}</span>
              </div>
              <hr />
              <button
                onClick={() => {
                  setActiveTab("profile");
                  setShowProfileMenu(false);
                }}
              >
                My Profile
              </button>
              <button
                onClick={() => {
                  setActiveTab("settings");
                  setShowProfileMenu(false);
                }}
              >
                Settings
              </button>
              <hr />
              <button
                className="danger-text"
                onClick={() => {
                  setShowProfileMenu(false);
                  handleLogout();
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

export default UserNavbar;
