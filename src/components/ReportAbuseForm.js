import React from "react";
import "./ReportAbuseForm.css"; 
import logo from "./logo.jpeg"; 


const ReportAbuseForm = () => {
  return (
    <div className="report-abuse-container">
      <img src={logo} alt="Logo" className="logo" />
      <form className="report-form">
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Brief Description of Incident:</label>
          <textarea id="description" name="description" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportAbuseForm;
