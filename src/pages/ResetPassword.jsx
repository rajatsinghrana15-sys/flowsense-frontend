import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiZap, FiLock, FiEye, FiEyeOff, FiLoader } from "react-icons/fi";
import "../style/Auth.css";

export default function ResetPassword() {
  const { resetToken } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await authService.resetPassword(resetToken, password);
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Reset link is invalid or has expired.",
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

        <h2 className="auth-title">Reset password</h2>
        <p className="auth-subtitle">Choose a new password for your account.</p>

        {error && <div className="auth-error-box">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <label>New Password</label>
            <div className="auth-input-wrap">
              <FiLock className="auth-input-icon" size={16} />
              <input
                className="auth-input"
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="auth-toggle-visibility"
                onClick={() => setShowPassword((p) => !p)}
                tabIndex={-1}
              >
                {showPassword ? <FiEyeOff size={16} /> : <FiEye size={16} />}
              </button>
            </div>
          </div>

          <div className="auth-form-group">
            <label>Confirm New Password</label>
            <div className="auth-input-wrap">
              <FiLock className="auth-input-icon" size={16} />
              <input
                className="auth-input"
                type={showPassword ? "text" : "password"}
                placeholder="Re-enter new password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                autoComplete="new-password"
              />
            </div>
          </div>

          <button className="auth-submit-btn" type="submit" disabled={loading}>
            {loading ? (
              <>
                <FiLoader className="spin" size={16} /> Resetting...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>

        <div className="auth-footer-link">
          <Link to="/login">Back to sign in</Link>
        </div>
      </div>
    </div>
  );
}
