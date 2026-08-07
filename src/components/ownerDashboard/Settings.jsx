import React, { useState, useEffect } from "react";
import axios from "axios";
import { User, Building, Shield, Bell } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });
  const [company, setCompany] = useState({
    companyName: "",
    domain: "",
  });
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProfile({
        name: data.owner.fullName,
        email: data.owner.email,
      });

      setCompany({
        companyName: data.owner.companyName,
        domain: data.owner.companyDomain || "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const saveProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.put(
        "http://localhost:5000/api/auth/update-profile",
        {
          fullName: profile.name,
          email: profile.email,
          companyName: company.companyName,
          companyDomain: company.domain,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      localStorage.setItem("user", JSON.stringify(data.owner));
      getProfile();
      alert("Profile Updated Successfully");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  const updatePassword = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!password.currentPassword || !password.newPassword) {
        return alert("Please fill all fields");
      }

      if (password.newPassword.length < 6) {
        return alert("Password must be at least 6 characters");
      }

      await axios.put(
        "http://localhost:5000/api/auth/change-password",
        {
          currentPassword: password.currentPassword,
          newPassword: password.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      alert("Password Updated Successfully");

      setPassword({
        currentPassword: "",
        newPassword: "",
      });
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to update password");
    }
  };

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
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div className="owner-form-group form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              <button className="owner-primary-btn" onClick={saveProfile}>
                Save Profile
              </button>
            </div>
          )}

          {activeTab === "company" && (
            <div className="owner-settings-panel settings-panel">
              <h3>Company Details</h3>

              <div className="owner-form-group form-group">
                <label>Organization Name</label>
                <input
                  type="text"
                  value={company.companyName}
                  onChange={(e) =>
                    setCompany({
                      ...company,
                      companyName: e.target.value,
                    })
                  }
                />
              </div>

              <div className="owner-form-group form-group">
                <label>Domain</label>
                <input
                  type="text"
                  value={company.domain}
                  onChange={(e) =>
                    setCompany({
                      ...company,
                      domain: e.target.value,
                    })
                  }
                />
              </div>

              <button
                className="owner-primary-btn primary-btn sm"
                onClick={saveProfile}
              >
                Update Details
              </button>
            </div>
          )}

          {activeTab === "security" && (
            <div className="owner-settings-panel settings-panel">
              <h3>Security Settings</h3>

              <div className="owner-form-group form-group">
                <label>Current Password</label>
                <input
                  type="password"
                  value={password.currentPassword}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      currentPassword: e.target.value,
                    })
                  }
                />
              </div>

              <div className="owner-form-group form-group">
                <label>New Password</label>
                <input
                  type="password"
                  value={password.newPassword}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      newPassword: e.target.value,
                    })
                  }
                />
              </div>

              <button
                className="owner-primary-btn primary-btn sm"
                onClick={updatePassword}
              >
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
