import React from "react";
import "../style/PricingPage.css";

const pricingPlans = [
  {
    name: "Starter",
    target: "Small Businesses",
    price: "₹4,999",
    period: "/month",
    popular: false,
    buttonText: "Start Free Trial",
    buttonClass: "plan-btn-outline",
    features: [
      "Up to 3 Active Processes",
      "AI Process Discovery",
      "Process Flow Viewer",
      "Standard KPI Dashboard",
      "Email Support",
      "Single Integration Source",
    ],
  },
  {
    name: "Professional",
    target: "Growing Companies",
    price: "₹14,999",
    period: "/month",
    popular: true,
    buttonText: "Get Started",
    buttonClass: "plan-btn-primary",
    features: [
      "Up to 15 Active Processes",
      "Everything in Starter",
      "Bottleneck & Delay Analyzer",
      "Compliance Violation Alerts",
      "AI Recommendation Engine",
      "Priority Support (24/7)",
      "Multi-system ERP/CRM Integrations",
    ],
  },
  {
    name: "Enterprise",
    target: "Unlimited Processes",
    price: "Custom",
    period: " Pricing",
    popular: false,
    buttonText: "Contact Sales",
    buttonClass: "plan-btn-outline",
    features: [
      "Unlimited Process Discovery",
      "Everything in Professional",
      "Custom AI Recommendation Models",
      "Dedicated Success Manager",
      "On-Premise / Private Cloud Deploy",
      "Custom SLA & Audit Reports",
      "Enterprise API Access",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="pricing-page-wrapper">
      <div className="pricing-container">
        {/* Hero Banner */}
        <section className="pricing-hero">
          <span className="pricing-badge">Simple & Transparent Pricing</span>
          <h1 className="pricing-title">
            Predictable Plans Tailored for Every Scale
          </h1>
          <p className="pricing-subtitle">
            Choose the right plan to uncover bottlenecks, optimize operations,
            and scale your enterprise with intelligent process automation.
          </p>
        </section>

        {/* Pricing Cards Grid */}
        <section className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <span className="popular-tag">Most Popular</span>
              )}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <span className="plan-target">{plan.target}</span>
              </div>

              <div className="plan-price-box">
                <span className="price-val">{plan.price}</span>
                <span className="price-period">{plan.period}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx}>
                    <span className="check-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`plan-btn ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </section>

        {/* Enterprise Callout Banner */}
        <section className="enterprise-banner">
          <h3>Need a Tailored Deployment for Big Tech or Government?</h3>
          <p>
            We offer custom SLA agreements, dedicated security compliance, and
            custom process connectors for large-scale enterprise workflows.
          </p>
          <button className="enterprise-btn">
            Talk to Our Solutions Architect
          </button>
        </section>
      </div>
    </div>
  );
};

export default PricingPage;
