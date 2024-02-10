// Header.js
import React from "react";
import "./Header.css";
import logo from "./logo.jpeg"; // Importing the logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-elements">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="about-button">About Us</button>
        <button className="report-button">Report Abuse</button>
        <a
        href="https://clinquant-dasik-c2b308.netlify.app/"
        className="register-button"
      >
        Register Sanstha
      </a>
        
        
      </div>
      <a
        href="https://mellow-licorice-bfec94.netlify.app/"
        className="blogs-button"
      >
        Success Stories
      </a>
      <button className="sign-in">Sign In</button>
    </header>
  );
};

export default Header;
