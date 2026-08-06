import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Lock, Bell, Moon } from "lucide-react";

const UserSettings = () => {
  const [activeTab, setActiveTab] = useState("account");
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordUpdate = async () => {
    if (!user._id) {
      toast.error("User not found. Please login again.");
      return;
    }

    if (!currentPassword || !newPassword) {
      toast.error("Please fill all fields");
      return;
    }

    if (newPassword.length < 6) {
      toast.error("New Password must be at least 6 characters");
      return;
    }
    setLoading(true);
    // Loading Popup
    const toastId = toast.loading("Updating Password...");

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/users/change-password/${user._id}`,
        {
          currentPassword,
          newPassword,
        },
      );

      toast.dismiss(toastId);

      toast.success(response.data.message);

      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      toast.dismiss(toastId);

      toast.error(error.response?.data?.message || "Password Update Failed");

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-settings-module">
      <div className="section-header">
        <h2>User Settings</h2>
        <p>
          Configure account security, notification triggers, and interface theme
          preferences.
        </p>
      </div>

      <div className="glass-card settings-card">
        <div className="settings-sidebar">
          <button
            className={activeTab === "account" ? "active" : ""}
            onClick={() => setActiveTab("account")}
          >
            <Lock size={16} /> Account Security
          </button>
          <button
            className={activeTab === "notifications" ? "active" : ""}
            onClick={() => setActiveTab("notifications")}
          >
            <Bell size={16} /> Notification Rules
          </button>
          <button
            className={activeTab === "theme" ? "active" : ""}
            onClick={() => setActiveTab("theme")}
          >
            <Moon size={16} /> Display & Theme
          </button>
        </div>

        <div className="settings-content">
          {activeTab === "account" && (
            <div className="settings-panel">
              <h3>Change Password</h3>
              <div className="form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <button
                className="primary-btn sm"
                onClick={handlePasswordUpdate}
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Password"}
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="settings-panel">
              <h3>Notification Preferences</h3>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" defaultChecked /> Notify me via email
                  when assigned a new task
                </label>
                <label>
                  <input type="checkbox" defaultChecked /> Send AI bottleneck
                  alerts for my processes
                </label>
              </div>
              <button className="primary-btn sm mt-16">Save Preferences</button>
            </div>
          )}

          {activeTab === "theme" && (
            <div className="settings-panel">
              <h3>Theme Preferences</h3>
              <div className="checkbox-group">
                <label>
                  <input type="radio" name="theme" defaultChecked /> Light Mode
                  (Enterprise Default)
                </label>
                <label>
                  <input type="radio" name="theme" /> Dark Mode
                </label>
              </div>
              <button
                className="primary-btn sm mt-16"
                onClick={() => {
                  document.body.classList.toggle("dark-theme");
                  toast.success("Theme Updated Successfully");
                }}
              >
                Apply Theme
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
