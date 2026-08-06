import React from "react";
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

const CompanyAnalytics = () => {
  const efficiencyData = [
    { month: "Jan", efficiency: 62, target: 70 },
    { month: "Feb", efficiency: 68, target: 70 },
    { month: "Mar", efficiency: 65, target: 75 },
    { month: "Apr", efficiency: 72, target: 75 },
    { month: "May", efficiency: 74, target: 80 },
    { month: "Jun", efficiency: 78, target: 80 },
  ];

  const departmentData = [
    { department: "Finance", automated: 85, manual: 15 },
    { department: "HR", automated: 60, manual: 40 },
    { department: "Operations", automated: 78, manual: 22 },
    { department: "Sales", automated: 90, manual: 10 },
    { department: "Support", automated: 70, manual: 30 },
  ];

  return (
    <div className="owner-analytics-section analytics-section">
      <div className="owner-section-header section-header">
        <h2>Company Analytics</h2>
        <p>
          Comprehensive process mining, throughput, and efficiency benchmarks.
        </p>
      </div>

      <div className="owner-analytics-grid analytics-grid">
        <div className="owner-chart-card glass-card chart-card">
          <h3>Process Efficiency Trend (6 Months)</h3>
          <p className="card-subtitle">
            Overall operational throughput vs corporate target
          </p>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={efficiencyData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorEfficiency"
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
                <XAxis dataKey="month" stroke="#64748b" />
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
                  dataKey="efficiency"
                  stroke="#0284c7"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorEfficiency)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="owner-chart-card glass-card chart-card">
          <h3>Department Automation Breakdown</h3>
          <p className="card-subtitle">
            Ratio of AI-assisted steps vs manual actions
          </p>
          <div className="owner-chart-wrapper chart-wrapper">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={departmentData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />
                <XAxis dataKey="department" stroke="#64748b" />
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
                  dataKey="automated"
                  name="Automated %"
                  fill="#0284c7"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="manual"
                  name="Manual %"
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

export default CompanyAnalytics;
