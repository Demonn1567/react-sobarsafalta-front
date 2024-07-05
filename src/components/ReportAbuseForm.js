import React, { useState } from "react";
import "./ReportAbuseForm.css"; 
import logo from "./logo.jpeg"; 

const ReportAbuseForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/report-abuse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 8000); 
        setFormData({ name: '', phone: '', description: '' }); 
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="report-abuse-container">
      <img src={logo} alt="Logo" className="logo" />
      <form className="report-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Your Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Brief Description of Incident:</label>
          <textarea 
            id="description" 
            name="description" 
            value={formData.description}
            onChange={handleChange}
            required 
          />
        </div>
        <button type="submit">Submit</button>
        {success && <div className="success-message">Report submitted successfully!</div>}
      </form>
    </div>
  );
};

export default ReportAbuseForm;
