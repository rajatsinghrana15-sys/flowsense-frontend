import React, { useState, useEffect, useRef } from "react";
import "../style/StatsSection.css";

const statsData = [
  { target: 40, label: "Faster Process Execution" },
  { target: 65, label: "Better Process Visibility" },
  { target: 32, label: "Reduction in Operational Delays" },
  { target: 90, label: "Faster Root Cause Analysis" },
];

// Single Number Counter Sub-component
const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const counterRef = useRef(null);

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter Animation
  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [startAnimation, target]);

  return <span ref={counterRef}>{count}%</span>;
};

// Main Component
const StatsSection = () => {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">
                <AnimatedCounter target={stat.target} />
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
