import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../style/Navbar.css";
import {
  FaBars,
  FaXmark,
  FaChevronDown,
  FaUser,
  FaUserTie,
} from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Screen resize check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Outside click handle karne ke liye (Dropdown band karne ke liye)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar-container">
      {/* Brand Logo */}
      <Link to="/" className="navbar-brand">
        <div className="brand-icon">F</div>
        <span className="brand-text">
          FlowSense <span className="brand-accent">AI</span>
        </span>
      </Link>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaXmark /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/product" onClick={() => setMenuOpen(false)}>
          Product
        </NavLink>
        <NavLink to="/solutions" onClick={() => setMenuOpen(false)}>
          Solutions
        </NavLink>
        <NavLink to="/features" onClick={() => setMenuOpen(false)}>
          Features
        </NavLink>
        <NavLink to="/pricing" onClick={() => setMenuOpen(false)}>
          Pricing
        </NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
          FAQ
        </NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>

        {/* Mobile Action Buttons */}
        <div className="mobile-buttons">
          <div className="mobile-login-group">
            <span className="mobile-login-title">Login Options</span>
            <NavLink
              to="/user-login"
              className="mobile-login-item"
              onClick={() => setMenuOpen(false)}
            >
              <FaUser /> User Login
            </NavLink>
            <NavLink
              to="/owner-login"
              className="mobile-login-item"
              onClick={() => setMenuOpen(false)}
            >
              <FaUserTie /> Owner Login
            </NavLink>
          </div>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="btn-primary">Book Demo</button>
          </NavLink>
        </div>
      </div>

      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Desktop Right Actions with Dropdown */}
      <div className="navbar-actions">
        <div className="login-dropdown-wrapper" ref={dropdownRef}>
          <button
            className="btn-login dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Login{" "}
            <FaChevronDown
              className={`arrow-icon ${dropdownOpen ? "open" : ""}`}
            />
          </button>

          {dropdownOpen && (
            <div className="login-dropdown-menu">
              <Link
                to="/user-login"
                className="dropdown-item"
                onClick={() => setDropdownOpen(false)}
              >
                <FaUser className="item-icon" />
                <span>User Login</span>
              </Link>

              <Link
                to="/owner-login"
                className="dropdown-item"
                onClick={() => setDropdownOpen(false)}
              >
                <FaUserTie className="item-icon" />
                <span>Owner Login</span>
              </Link>
            </div>
          )}
        </div>

        <NavLink to="/contact">
          <button className="btn-primary">Book Demo</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
