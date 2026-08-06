import React from "react";
import { Workflow, CheckCircle2, Clock, Zap, TrendingUp } from "lucide-react";

const UserStatsCards = () => {
  const stats = [
    {
      id: 1,
      title: "Assigned Processes",
      value: "12",
      change: "+2 this week",
      isPositive: true,
      icon: Workflow,
      color: "#0284c7",
    },
    {
      id: 2,
      title: "Completed Tasks",
      value: "86",
      change: "+14% vs last month",
      isPositive: true,
      icon: CheckCircle2,
      color: "#10b981",
    },
    {
      id: 3,
      title: "Pending Approvals",
      value: "5",
      change: "2 urgent due today",
      isPositive: false,
      icon: Clock,
      color: "#f59e0b",
    },
    {
      id: 4,
      title: "Efficiency Score",
      value: "92%",
      change: "+3.5% optimization",
      isPositive: true,
      icon: Zap,
      color: "#8b5cf6",
    },
  ];

  return (
    <div className="stats-cards-grid">
      {stats.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <div key={stat.id} className="stat-card">
            <div className="stat-card-header">
              <div
                className="stat-icon-wrapper"
                style={{
                  backgroundColor: `${stat.color}15`,
                  color: stat.color,
                }}
              >
                <IconComponent size={22} />
              </div>
              <div
                className={`stat-trend ${stat.isPositive ? "positive" : "warning"}`}
              >
                <TrendingUp size={14} />
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="stat-card-body">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserStatsCards;
