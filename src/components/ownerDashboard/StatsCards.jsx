import React from "react";
import {
  Eye,
  Zap,
  PlayCircle,
  DollarSign,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: "Process Visibility",
      value: "92%",
      change: "+4.2%",
      isPositive: true,
      icon: Eye,
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "Process Efficiency",
      value: "78%",
      change: "+8.5%",
      isPositive: true,
      icon: Zap,
      color: "#06B6D4",
    },
    {
      id: 3,
      title: "Active Processes",
      value: "24",
      change: "+2",
      isPositive: true,
      icon: PlayCircle,
      color: "#8B5CF6",
    },
    {
      id: 4,
      title: "Cost Savings",
      value: "$42K",
      change: "+12.3%",
      isPositive: true,
      icon: DollarSign,
      color: "#10B981",
    },
  ];

  return (
    <div className="owner-stats-grid stats-cards-grid">
      {stats.map((stat) => {
        const IconComponent = stat.icon;

        return (
          <div key={stat.id} className="owner-stat-card stat-card">
            <div className="owner-stat-header stat-card-header">
              <div
                className="owner-stat-icon stat-icon-wrapper"
                style={{
                  backgroundColor: `${stat.color}15`,
                  color: stat.color,
                }}
              >
                <IconComponent size={22} />
              </div>

              <div
                className={`owner-stat-trend stat-trend ${
                  stat.isPositive ? "positive" : "negative"
                }`}
              >
                {stat.isPositive ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}

                <span>{stat.change}</span>
              </div>
            </div>

            <div className="owner-stat-body stat-card-body">
              <h3 className="owner-stat-value stat-value">{stat.value}</h3>

              <p className="owner-stat-title stat-title">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
