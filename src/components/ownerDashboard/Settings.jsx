import React, { useState } from "react";
import { User, Building, Shield, Bell } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="owner-settings-module settings-module">
      <div className="owner-section-header section-header">
        <h2>Platform Settings</h2>
        <p>
          Manage your account preferences, enterprise credentials, and
          notification triggers.
        </p>
      </div>

      <div className="owner-settings-card glass-card settings-card">
        <div className="owner-settings-sidebar settings-sidebar">
          <button
            className={activeTab === "profile" ? "owner-active active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            <User size={16} />
            Profile Settings
          </button>

          <button
            className={activeTab === "company" ? "owner-active active" : ""}
            onClick={() => setActiveTab("company")}
          >
            <Building size={16} />
            Company Details
          </button>

          <button
            className={activeTab === "security" ? "owner-active active" : ""}
            onClick={() => setActiveTab("security")}
          >
            <Shield size={16} />
            Security & Auth
          </button>

          <button
            className={
              activeTab === "notifications" ? "owner-active active" : ""
            }
            onClick={() => setActiveTab("notifications")}
          >
            <Bell size={16} />
            Notifications
          </button>
        </div>

        <div className="owner-settings-content settings-content">
          {activeTab === "profile" && (
            <div className="owner-settings-panel settings-panel">
              <h3>Profile Settings</h3>

              <div className="owner-form-group form-group">
                <label>Full Name</label>
                <input type="text" defaultValue="Alex Morgan" />
              </div>

              <div className="owner-form-group form-group">
                <label>Email Address</label>
                <input type="email" defaultValue="alex.m@flowsense.ai" />
              </div>

              <button className="owner-primary-btn primary-btn sm">
                Save Profile
              </button>
            </div>
          )}

          {activeTab === "company" && (
            <div className="owner-settings-panel settings-panel">
              <h3>Company Details</h3>

              <div className="owner-form-group form-group">
                <label>Organization Name</label>
                <input type="text" defaultValue="FlowSense AI Enterprise" />
              </div>

              <div className="owner-form-group form-group">
                <label>Domain</label>
                <input type="text" defaultValue="flowsense.ai" />
              </div>

              <button className="owner-primary-btn primary-btn sm">
                Update Details
              </button>
            </div>
          )}

          {activeTab === "security" && (
            <div className="owner-settings-panel settings-panel">
              <h3>Security Settings</h3>

              <div className="owner-form-group form-group">
                <label>Current Password</label>
                <input type="password" placeholder="••••••••" />
              </div>

              <div className="owner-form-group form-group">
                <label>New Password</label>
                <input type="password" placeholder="••••••••" />
              </div>

              <button className="owner-primary-btn primary-btn sm">
                Update Password
              </button>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="owner-settings-panel settings-panel">
              <h3>Notification Preferences</h3>

              <div className="owner-checkbox-group checkbox-group">
                <label>
                  <input type="checkbox" defaultChecked />
                  Email alerts for critical bottlenecks
                </label>

                <label>
                  <input type="checkbox" defaultChecked />
                  Weekly Process Intelligence Digests
                </label>
              </div>

              <button
                className="owner-primary-btn primary-btn sm"
                style={{ marginTop: "16px" }}
              >
                Save Preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
