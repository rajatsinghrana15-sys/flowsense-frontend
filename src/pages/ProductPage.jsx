import React, { useState } from "react";
import {
  Cpu,
  GitMerge,
  AlertTriangle,
  ShieldCheck,
  BarChart3,
  FileText,
  Lightbulb,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import "../style/ProductPage.css";

const modules = [
  {
    id: "dashboard",
    name: "Process Dashboard",
    icon: LayoutDashboard,
    title: "Real-Time Operational Intelligence",
    description:
      "Get an instant high-level view of active process instances, cycle times, throughput, and system health across your organization.",
    highlights: [
      "Live status metrics",
      "Customizable widget layouts",
      "System-wide health scoring",
    ],
  },
  {
    id: "discovery",
    name: "AI Discovery Engine",
    icon: Cpu,
    title: "Automated Workflow Discovery",
    description:
      "Automatically construct business workflows directly from event logs and system interactions—no manual process mapping required.",
    highlights: [
      "Zero manual mapping",
      "Multi-system data integration",
      "Automatic variant extraction",
    ],
  },
  {
    id: "flow-viewer",
    name: "Process Flow Viewer",
    icon: GitMerge,
    title: "End-to-End Visual Mapping",
    description:
      "Interactively explore complete end-to-end process paths, dynamic decision branching, and path variations.",
    highlights: [
      "Interactive flowchart zooming",
      "Variant comparison side-by-side",
      "Step-level deep dives",
    ],
  },
  {
    id: "bottleneck",
    name: "Bottleneck Analyzer",
    icon: AlertTriangle,
    title: "Delay & Inefficiency Detection",
    description:
      "Pinpoint friction points, queue delays, and idle time between workflow stages before they impact SLA performance.",
    highlights: [
      "Heatmaps for delay hotspots",
      "Root-cause analysis",
      "Impact estimation ($/time)",
    ],
  },
  {
    id: "compliance",
    name: "Compliance Checker",
    icon: ShieldCheck,
    title: "Continuous Governance & Conformance",
    description:
      "Compare executed workflows against standard operating procedures (SOPs) to instantly flag deviations and policy violations.",
    highlights: [
      "Conformance rate scoring",
      "Instant breach alerts",
      "Audit-ready trail logs",
    ],
  },
  {
    id: "kpi",
    name: "KPI Dashboard",
    icon: BarChart3,
    title: "Performance & Metric Tracking",
    description:
      "Track key performance indicators such as average processing time, operational cost per case, and error rates.",
    highlights: [
      "Custom threshold alerts",
      "Historical trend analytics",
      "Role-based KPI views",
    ],
  },
  {
    id: "reports",
    name: "Reports Center",
    icon: FileText,
    title: "Executive & Operational Insights",
    description:
      "Generate, schedule, and export comprehensive analytics reports tailored for operational leaders and C-suite executives.",
    highlights: [
      "Automated PDF/CSV exports",
      "Scheduled email digests",
      "Executive summaries",
    ],
  },
  {
    id: "recommendations",
    name: "AI Recommendation Engine",
    icon: Lightbulb,
    title: "Actionable Optimization Insights",
    description:
      "Receive proactive recommendations on how to reallocate resources, automate steps, and streamline workflow paths.",
    highlights: [
      "ROI estimation per recommendation",
      "One-click simulation",
      "Predictive action triggers",
    ],
  },
];

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState(modules[0].id);
  const activeModule = modules.find((m) => m.id === activeTab);

  return (
    <div className="product-page-container">
      {/* Hero Header */}
      <div className="product-header">
        <h1 className="product-title">
          Automated Process Mining & AI Optimization
        </h1>
        <p className="product-description">
          FlowSense AI discovers business workflows automatically from your
          system logs—eliminating manual process mapping. Visualize end-to-end
          flows, uncover hidden bottlenecks, ensure compliance, and apply
          AI-driven fixes.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="product-grid">
        {/* Module Sidebar */}
        <div className="product-sidebar">
          <h2 className="sidebar-title">Core Platform Modules</h2>
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = mod.id === activeTab;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`module-tab-btn ${isActive ? "active" : ""}`}
              >
                <Icon className="tab-icon" />
                <span>{mod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Module Content Card */}
        <div className="product-content-card">
          <div>
            <div className="module-header">
              {activeModule && (
                <div className="icon-wrapper">
                  <activeModule.icon
                    style={{ width: "2rem", height: "2rem" }}
                  />
                </div>
              )}
              <div>
                <span className="module-badge">Module Overview</span>
                <h3 className="module-heading">{activeModule?.title}</h3>
              </div>
            </div>

            <p className="module-body-text">{activeModule?.description}</p>

            <div className="highlights-container">
              <h4 className="highlights-title">Key Capabilities:</h4>
              {activeModule?.highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <CheckCircle2 className="check-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="demo-cta-banner">
            <div>
              <p className="cta-title">
                Ready to explore {activeModule?.name} in action?
              </p>
              <p className="cta-subtext">
                Experience auto-discovery on live system data.
              </p>
            </div>
            <a href="/contact" className="cta-button">
              <span>Launch Demo</span>
              <ArrowRight style={{ width: "1rem", height: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
