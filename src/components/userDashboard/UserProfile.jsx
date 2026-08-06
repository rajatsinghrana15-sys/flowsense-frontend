import React from "react";
import { User, Mail, Building, BadgeCheck, Edit3 } from "lucide-react";

const UserProfile = ({ userData }) => {
  console.log(userData);
  if (!userData) {
    return <h2>Loading Profile...</h2>;
  }
  return (
    <div className="user-profile-module">
      <div className="section-header">
        <h2>Employee Profile</h2>
        <p>
          Manage your enterprise user credentials and assigned department
          parameters.
        </p>
      </div>

      <div className="glass-card profile-card">
        <div className="profile-card-top">
          <div className="large-avatar">
            <User size={40} />
          </div>
          <div className="profile-main-info">
            <h3>{userData?.name}</h3>
            <span className="dept-tag">
              {userData?.role} • {userData?.department}
            </span>
          </div>
          <button className="primary-btn sm ml-auto">
            <Edit3 size={14} /> Edit Profile
          </button>
        </div>

        <hr className="divider" />

        <div className="profile-details-grid">
          <div className="info-box">
            <span className="lbl">
              <Mail size={14} /> Email Address
            </span>
            <span className="val">{userData?.email}</span>
          </div>

          <div className="info-box">
            <span className="lbl">
              <Building size={14} /> Department
            </span>
            <span className="val">{userData?.department}</span>
          </div>

          <div className="info-box">
            <span className="lbl">
              <BadgeCheck size={14} /> Employee ID
            </span>
            <span className="val">{userData?.employeeId}</span>
          </div>

          <div className="info-box">
            <span className="lbl">Efficiency Score</span>
            <span className="val highlight">92%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
