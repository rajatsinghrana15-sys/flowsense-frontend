import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. useNavigate import karein
import "../style/ContactPage.css";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

const ContactPage = () => {
  const navigate = useNavigate(); // 2. navigate hook initialize karein

  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    businessEmail: "",
    phoneNumber: "",
    industry: "",
    numberOfEmployees: "",
    existingSystems: "",
    challenges: "",
  });

  // Popup Modal Control States
  const [popup, setPopup] = useState({
    show: false,
    title: "",
    message: "",
    isSuccess: true,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/demo/book-demo",
        formData,
      );

      // Success Popup
      setPopup({
        show: true,
        title: "Success! 🎉",
        message: response.data.message || "Demo booked successfully!",
        isSuccess: true,
      });

      // Form Reset
      setFormData({
        companyName: "",
        yourName: "",
        businessEmail: "",
        phoneNumber: "",
        industry: "",
        numberOfEmployees: "",
        existingSystems: "",
        challenges: "",
      });
    } catch (error) {
      console.error(error);
      // Error Popup
      setPopup({
        show: true,
        title: "Oops! ❌",
        message:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
        isSuccess: false,
      });
    } finally {
      setLoading(false);
    }
  };

  // Popup Close handler with Redirect logic
  const closePopup = () => {
    const wasSuccess = popup.isSuccess;
    setPopup({ ...popup, show: false });

    // Agar form successfully submit hua hai tabhi Home page par bheinjo
    if (wasSuccess) {
      navigate("/");
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info">
            <span className="contact-badge">Schedule a Demo</span>
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
              Schedule a personalized demonstration and discover how FlowSense
              AI can transform your business processes.
            </p>

            <div className="audience-list">
              <strong>Tailored for:</strong> Operations Managers, Business
              Analysts, Digital Transformation Teams, and Enterprise Leaders.
            </div>

            <div className="detail-item">
              <FiPhone className="detail-icon" />
              <span>+91 11223 44556</span>
            </div>

            <div className="detail-item">
              <FiMail className="detail-icon" />
              <span>flowsense.ai@gmail.com</span>
            </div>

            <div className="detail-item">
              <FiMapPin className="detail-icon" />
              <span>Haryana, India</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-group">
                <label>Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="e.g. Acme Corp"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="yourName"
                  placeholder="e.g. John Doe"
                  value={formData.yourName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Business Email *</label>
                <input
                  type="email"
                  name="businessEmail"
                  placeholder="john@company.com"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+91 98765 43210"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="">Select Industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="banking">Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="logistics">Logistics</option>
                  <option value="government">Government</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Number of Employees</label>
                <select
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleChange}
                >
                  <option value="">Select Range</option>
                  <option value="1-50">1 - 50</option>
                  <option value="51-200">51 - 200</option>
                  <option value="201-1000">201 - 1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label>Existing Systems (ERP/CRM)</label>
                <input
                  type="text"
                  name="existingSystems"
                  placeholder="e.g. SAP, Salesforce, Oracle"
                  value={formData.existingSystems}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group full-width">
                <label>What are your main operational challenges?</label>
                <textarea
                  name="challenges"
                  rows="4"
                  placeholder="Describe your current bottleneck or process delays..."
                  value={formData.challenges}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group full-width">
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : "Book Demo"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {popup.show && (
        <div className="modal-overlay" onClick={closePopup}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div
              className={`modal-status-icon ${
                popup.isSuccess ? "success" : "error"
              }`}
            >
              {popup.isSuccess ? <FiCheckCircle /> : <FiXCircle />}
            </div>
            <h2>{popup.title}</h2>
            <p>{popup.message}</p>
            <button className="modal-close-btn" onClick={closePopup}>
              {popup.isSuccess ? "Go to Home" : "Close"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
