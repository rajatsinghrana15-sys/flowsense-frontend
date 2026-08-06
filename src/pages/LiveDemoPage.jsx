import React, { useState } from "react";
import axios from "axios";
import "../style/LiveDemoPage.css";

const LiveDemoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Custom Modal / Popup State
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    yourName: "",
    businessEmail: "",
    companyName: "",
    phoneNumber: "",
    industry: "manufacturing",
  });

  const videoId = "0-FUhQKe-eU";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/demo/book-demo`,
        formData,
      );

      setShowPopup(true);

      console.log(response.data);
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const closePopup = () => {
    setShowPopup(false);

    setFormData({
      yourName: "",
      businessEmail: "",
      companyName: "",
      phoneNumber: "",
      industry: "manufacturing",
    });
  };

  return (
    <div className="demo-page-wrapper">
      <div className="demo-container">
        {/* Hero Section */}
        <section className="demo-hero">
          <span className="demo-badge">Interactive Experience</span>
          <h1 className="demo-title">See FlowSense AI in Action</h1>
          <p className="demo-subtitle">
            Watch how our platform automatically reconstructs complex workflows,
            detects operational bottlenecks, and suggests real-time
            optimizations.
          </p>
        </section>

        {/* Content Grid */}
        <div className="demo-grid">
          {/* Left Side: Video Player & Walkthrough Highlights */}
          <div className="demo-left">
            <div className="video-wrapper">
              <div className="video-screen">
                {!isPlaying ? (
                  <div className="video-overlay">
                    <button
                      className="play-btn"
                      onClick={() => setIsPlaying(true)}
                      aria-label="Play Live Demo Video"
                    >
                      ▶
                    </button>
                    <span>Click to start 5-minute walkthrough</span>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title="FlowSense AI Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ position: "absolute", top: 0, left: 0 }}
                  ></iframe>
                )}
              </div>

              <div className="video-details">
                <div>
                  <h3>FlowSense AI End-to-End Walkthrough</h3>
                  <p>
                    Process Mining • Bottleneck Detection • AI Recommendations
                  </p>
                </div>
                <span className="duration-tag">⏱️ 05:20 Mins</span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="demo-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <div className="highlight-text">
                  <h4>No Manual Workflow Mapping</h4>
                  <p>
                    See direct ingestion from SAP, Salesforce, and custom ERP
                    databases.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <div className="highlight-text">
                  <h4>Real-time Bottleneck Flagging</h4>
                  <p>
                    Watch how the AI pinpoints precise approval delays causing
                    cycle-time bloat.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">✓</span>
                <div className="highlight-text">
                  <h4>Automated Optimization Recommendations</h4>
                  <p>
                    Learn how one-click AI rules streamline multi-department
                    handoffs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Request Custom Live Demo Form */}
          <div className="demo-right">
            <div className="demo-form-card">
              <h2>Schedule a Custom Demo</h2>
              <p>
                Want a personalized walk-through using your industry dataset?
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName" id="yourName">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="yourName"
                    placeholder="e.g. Alex Morgan"
                    value={formData.yourName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="businessEmail"
                    placeholder="alex@company.com"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="e.g. Global Tech Enterprise"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="e.g. +1 (555) 123-4567"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="industry">Industry Focus</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                  >
                    <option value="manufacturing">Manufacturing</option>
                    <option value="banking">Banking & Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="logistics">Logistics & Supply Chain</option>
                    <option value="insurance">Insurance</option>
                    <option value="government">
                      Government & Public Sector
                    </option>
                  </select>
                </div>

                <button type="submit" className="submit-demo-btn">
                  Book 1-on-1 Demo Session
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* --- CUSTOM POPUP MODAL --- */}
      {showPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">🎉</div>
            <h2>Demo Request Received!</h2>
            <p>
              Thank you, <strong>{formData.yourName}</strong>! Our solutions
              expert will contact you shortly at <u>{formData.businessEmail}</u>
              .
            </p>
            <button className="modal-close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveDemoPage;
