import React, { useState } from "react";
import UserSidebar from "../components/userDashboard/UserSidebar";
import UserNavbar from "../components/userDashboard/UserNavbar";
import UserStatsCards from "../components/userDashboard/UserStatsCards";
import MyProcesses from "../components/userDashboard/MyProcesses";
import ProcessDetails from "../components/userDashboard/ProcessDetails";
import TaskManagement from "../components/userDashboard/TaskManagement";
import AIRecommendations from "../components/userDashboard/AIRecommendations";
import UserReports from "../components/userDashboard/UserReports";
import UserNotifications from "../components/userDashboard/UserNotifications";
import UserProfile from "../components/userDashboard/UserProfile";
import UserSettings from "../components/userDashboard/UserSettings";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import "../style/UserDashboard/UserDashboard.css";

// Mock user data structured for future API sync

const UserDashboard = () => {
  const userData = JSON.parse(localStorage.getItem("user")) || {};
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedProcessId, setSelectedProcessId] = useState(null);

  // Helper to open process details tab with a selected ID
  const handleSelectProcess = (id) => {
    setSelectedProcessId(id);
    setActiveTab("process-details");
  };

  // Recharts Analytics Sub-view
  const renderAnalyticsView = () => {
    const productivityData = [
      { day: "Mon", completedTasks: 12, target: 10 },
      { day: "Tue", completedTasks: 16, target: 12 },
      { day: "Wed", completedTasks: 14, target: 12 },
      { day: "Thu", completedTasks: 18, target: 15 },
      { day: "Fri", completedTasks: 20, target: 15 },
    ];

    const efficiencyMetrics = [
      { metric: "Cycle Time", score: "2.4 Days", status: "Optimal" },
      { metric: "Waiting Time", score: "3.2 Hours", status: "Good" },
      { metric: "Completion Rate", score: "94.8%", status: "Optimal" },
      { metric: "Performance Score", score: "92/100", status: "Top Tier" },
    ];

    return (
      <div className="user-dashboard-analytics-module">
        <div className="user-dashboard-section-header">
          <h2>Personal Process Analytics</h2>
          <p>
            Track your cycle time, task throughput, and individual productivity
            scores.
          </p>
        </div>

        <div className="user-dashboard-metrics-grid">
          {efficiencyMetrics.map((item, idx) => (
            <div
              key={idx}
              className="user-dashboard-glass-card user-dashboard-metric-card"
            >
              <span className="user-dashboard-metric-label">{item.metric}</span>
              <h3 className="user-dashboard-metric-value">{item.score}</h3>
              <span className="user-dashboard-metric-badge">{item.status}</span>
            </div>
          ))}
        </div>

        <div className="user-dashboard-grid-two user-dashboard-mt20">
          <div className="user-dashboard-glass-card user-dashboard-chart-card">
            <h3>Weekly Productivity Throughput</h3>
            <p className="user-dashboard-card-subtitle">
              Completed tasks vs daily targets
            </p>
            <div className="user-dashboard-chart-wrapper">
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart
                  data={productivityData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="userColorTasks"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#0284c7" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#0284c7" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="completedTasks"
                    stroke="#0284c7"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#userColorTasks)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="user-dashboard-glass-card user-dashboard-chart-card">
            <h3>Task Completion Benchmark</h3>
            <p className="user-dashboard-card-subtitle">
              Daily execution against department baseline
            </p>
            <div className="user-dashboard-chart-wrapper">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={productivityData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />
                  <XAxis dataKey="day" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="completedTasks"
                    name="Completed"
                    fill="#0284c7"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="target"
                    name="Daily Goal"
                    fill="#cbd5e1"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render main layout section based on active sidebar selection
  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <div className="user-dashboard-welcome">
              <div className="user-dashboard-welcome-text">
                <h2>Welcome Back, {userData?.name?.split(" ")[0]} 👋</h2>
                <p>
                  Track your assigned processes and improve operational
                  efficiency with AI insights.
                </p>
              </div>
            </div>
            <UserStatsCards />
            <div className="user-dashboard-grid-two">
              <MyProcesses limit={2} onViewDetails={handleSelectProcess} />
              <AIRecommendations limit={2} />
            </div>
            <TaskManagement limit={4} />
          </>
        );
      case "my-processes":
        return <MyProcesses onViewDetails={handleSelectProcess} />;
      case "process-details":
        return (
          <ProcessDetails
            processId={selectedProcessId}
            onBack={() => setActiveTab("my-processes")}
          />
        );
      case "tasks":
        return <TaskManagement />;
      case "analytics":
        return renderAnalyticsView();
      case "ai-insights":
        return <AIRecommendations />;
      case "reports":
        return <UserReports />;
      case "notifications":
        return <UserNotifications />;
      case "profile":
        return <UserProfile userData={userData} />;
      case "settings":
        return <UserSettings />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`user-dashboard-container ${isCollapsed ? "user-dashboard-sidebar-collapsed" : ""}`}
    >
      <UserSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      <div className="user-dashboard-main">
        <UserNavbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userData={userData}
        />

        <main className="user-dashboard-content">{renderActiveTab()}</main>
      </div>
    </div>
  );
};

export default UserDashboard;
