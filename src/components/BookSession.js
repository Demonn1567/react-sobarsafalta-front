import React, { useState } from 'react';
import logo from './logo.jpeg';

function BookSession() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        sessionType: '',
        message: '',
        additionalDetails: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // You can add code here to send formData to your server or API
      };
    
      return (
        <div style={{ textAlign: 'center' }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '200px', margin: '20px auto' }} />
          <h2>Contact</h2>
          <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ margin: '10px 0' }}>
              <label>Your Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ margin: '10px 0' }}>
              <label>Your Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ margin: '10px 0' }}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ margin: '10px 0' }}>
              <label>City of Residence:</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ margin: '10px 0' }}>
              <label>Counselling Session/ Registration (Offline/Online)?</label>
              <input
                type="text"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ margin: '10px 0' }}>
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <div style={{ margin: '10px 0' }}>
              <label>Additional Details:</label>
              <textarea
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
            <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
          </form>
          <footer style={{ marginTop: '20px', fontSize: '12px' }}>
            <p>© 2024 SoberSafalta. All rights reserved.</p>
            <p>
              <a href="#terms">Terms of Service</a> | <a href="#privacy">Privacy Policy</a> | <a href="#contact">Contact Us</a>
            </p>
          </footer>
        </div>
      );
}

export default BookSession;