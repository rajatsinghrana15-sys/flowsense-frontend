import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../style/LoginPage.css";
import {
  FaGoogle,
  FaGithub,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const OwnerLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  // Custom Modal State (Success aur Error dono ke liye)
  const [modalState, setModalState] = useState({
    show: false,
    type: "", // "success" ya "error"
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        },
      );

      // Save Token
      localStorage.setItem("token", response.data.token);

      // Save Owner Data
      localStorage.setItem("user", JSON.stringify(response.data.owner));

      // Save Role
      localStorage.setItem("userRole", response.data.owner.role);

      // Success Popup
      setModalState({
        show: true,
        type: "success",
        title: "Login Successful!",
        message: `Welcome back, ${response.data.owner.fullName}`,
      });
    } catch (error) {
      setModalState({
        show: true,
        type: "error",
        title: "Login Failed",
        message: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  const closeModal = () => {
    const isSuccess = modalState.type === "success";
    setModalState({ show: false, type: "", title: "", message: "" });

    // Sirf success case me Dashboard par redirect karein
    if (isSuccess) {
      navigate("/owner-dashboard");
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <Link to="/" className="brand-logo">
            FlowSense AI
          </Link>
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">
            Enter your credentials to access your workspace
          </p>
        </div>

        {/* Social Login Buttons */}
        <div className="social-login-group">
          <button type="button" className="social-btn">
            <FaGoogle className="social-icon google" />
            Google
          </button>
          <button type="button" className="social-btn">
            <FaGithub className="social-icon github" />
            GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="divider">
          <span>or continue with email</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Work Email</label>
            <div className="input-box">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-box">
              <FaLock className="input-icon" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>

            <Link to="/forgotpassword" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>

        {/* Footer Link */}
        <div className="login-footer">
          Don't have an account? <Link to="/contact">Sign up for a demo</Link>
        </div>
      </div>

      {/* --- DYNAMIC CUSTOM POPUP MODAL (SUCCESS & ERROR) --- */}
      {modalState.show && (
        <div className="modal-overlay">
          <div className={`modal-content ${modalState.type}`}>
            {modalState.type === "success" ? (
              <FaCheckCircle className="modal-icon success-icon" />
            ) : (
              <FaExclamationTriangle className="modal-icon error-icon" />
            )}
            <h2>{modalState.title}</h2>
            <p>{modalState.message}</p>
            <button
              className={`modal-close-btn ${
                modalState.type === "error" ? "error-btn" : ""
              }`}
              onClick={closeModal}
            >
              {modalState.type === "success"
                ? "Continue to Dashboard"
                : "Try Again"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerLogin;
