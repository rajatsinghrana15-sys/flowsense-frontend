import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, LogIn, ArrowRight } from "lucide-react";
import "../style/UserLogin.css";

const UserLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    const toastId = toast.loading("Signing in...");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        {
          email: formData.email,
          password: formData.password,
        },
      );

      // token save
      localStorage.setItem("token", response.data.token);

      // user data save
      localStorage.setItem("user", JSON.stringify(response.data.user));

      toast.dismiss(toastId);
      toast.success("Login Successful");
      console.log("Response:", response.data);
      console.log("Saved User:", JSON.parse(localStorage.getItem("user")));

      navigate("/user-dashboard");
    } catch (error) {
      console.log(error);

      toast.dismiss(toastId);

      toast.error(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="user-login-container">
      {loading && (
        <div className="user-login-loader-overlay">
          <div className="user-login-loader-box">
            <div className="user-login-loader"></div>

            <h3>Signing In...</h3>

            <p>Please wait while we verify your account.</p>
          </div>
        </div>
      )}
      <div className="user-login-card">
        {/* Header */}
        <div className="user-login-header">
          <div className="user-login-icon-badge">
            <LogIn size={24} />
          </div>
          <h2 className="user-login-title">Welcome Back!</h2>
          <p className="user-login-subtitle">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="user-login-form">
          {/* Email Field */}
          <div className="user-login-field">
            <label htmlFor="email" className="user-login-label">
              Email Address
            </label>
            <div className="user-login-input-wrapper">
              <div className="user-login-input-icon">
                <Mail size={20} />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="user-login-input"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="user-login-field">
            <div className="user-login-label-row">
              <label htmlFor="password" className="user-login-label">
                Password
              </label>
              <a href="#forgot" className="user-login-forgot-link">
                Forgot password?
              </a>
            </div>
            <div className="user-login-input-wrapper">
              <div className="user-login-input-icon">
                <Lock size={20} />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="user-login-password-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="user-login-toggle-password"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="user-login-checkbox-container">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="user-login-checkbox"
            />
            <label htmlFor="rememberMe" className="user-login-checkbox-label">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="user-login-submit-btn"
          >
            {loading ? (
              <div className="user-login-spinner" />
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <p className="user-login-footer-text">
          Back to{" "}
          <Link to="/" className="user-login-footer-link">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
