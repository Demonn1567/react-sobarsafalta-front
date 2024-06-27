// Header.js
import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./logo.jpeg"; 
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useIsPresent } from "framer-motion";

const Header = () => {
  const isPresent = useIsPresent();
  const [showPrivacyScreen, setShowPrivacyScreen] = useState(true);

  useEffect(() => {
    if (showPrivacyScreen) {
      setTimeout(() => setShowPrivacyScreen(false), 50); // Duration matches the animation
    }
  }, [showPrivacyScreen]);

  return (
    
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-elements">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="about-button">About Us</button>
        <Link to="/report" className="report-button">Report Abuse</Link>
        <Link to="/register" className="register-button">Register Sanstha</Link>
      </div>
      <Link to="/success-stories" className="blogs-button">Success Stories</Link>
      <button className="sign-in">Sign In</button>
      <AnimatePresence>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: showPrivacyScreen ? 1 : 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      </AnimatePresence>
    </header>
  );
};

export default Header;
