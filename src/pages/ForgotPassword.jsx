import { useState } from "react";
import { Link } from "react-router-dom";
import { FiZap, FiMail, FiLoader } from "react-icons/fi";
import "../style/Auth.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await authService.forgotPassword(email);
      setSuccess(
        "If an account exists with this email, a password reset link has been generated. " +
          "In production this is emailed to you automatically.",
      );
      // Dev convenience: surface the reset URL returned by the API so the flow is testable
      // without a live email provider configured.
      if (res.data?.resetUrl) {
        console.log("Password reset URL (dev only):", res.data.resetUrl);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-brand-icon">
            <FiZap />
          </div>
          <div>
            <h1>
              FlowSense <span>AI</span>
            </h1>
            <p>Process Mining Platform</p>
          </div>
        </div>

        <h2 className="auth-title">Forgot password</h2>
        <p className="auth-subtitle">
          Enter your account email and we'll send you a reset link.
        </p>

        {error && <div className="auth-error-box">{error}</div>}
        {success && <div className="auth-success-box">{success}</div>}

        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label>Email Address</label>
            <div className="auth-input-wrap">
              <FiMail className="auth-input-icon" size={16} />
              <input
                className="auth-input"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </div>

          <button className="auth-submit-btn" type="submit" disabled={loading}>
            {loading ? (
              <>
                <FiLoader className="spin" size={16} /> Sending...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <div className="auth-footer-link">
          Remembered your password? <Link to="/login">Back to sign in</Link>
        </div>
      </div>
    </div>
  );
}
