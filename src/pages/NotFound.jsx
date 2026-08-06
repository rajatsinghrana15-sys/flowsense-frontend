import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        background: "linear-gradient(160deg, #f0f9ff 0%, #ffffff 45%, #e0f2fe 100%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#0ea5e9", margin: 0 }}>404</h1>
      <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/dashboard"
        style={{
          marginTop: "12px",
          padding: "10px 20px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
          color: "#fff",
          textDecoration: "none",
          fontSize: "13.5px",
          fontWeight: 600,
        }}
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
