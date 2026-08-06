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

      setTimeout(() => {
        navigate("/user-dashboard");
      }, 800);
    } catch (error) {
      console.log(error);

      toast.dismiss(toastId);

      toast.error(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <div className="login-icon-badge">
            <LogIn size={24} />
          </div>
          <h2 className="login-title">Welcome Back!</h2>
          <p className="login-subtitle">Please enter your details to sign in</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="form-group">
          {/* Email Field */}
          <div className="field-container">
            <label htmlFor="email" className="input-label">
              Email Address
            </label>
            <div className="input-wrapper">
              <div className="input-icon-left">
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
                className="form-input"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="field-container">
            <div className="label-row">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <a href="#forgot" className="forgot-link">
                Forgot password?
              </a>
            </div>
            <div className="input-wrapper">
              <div className="input-icon-left">
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
                className="form-input-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="toggle-password-btn"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me Checkbox */}
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="checkbox-input"
            />
            <label htmlFor="rememberMe" className="checkbox-label">
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (
              <div className="spinner" />
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <p className="footer-text">
          Back to{" "}
          <Link to="/" className="footer-link">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
