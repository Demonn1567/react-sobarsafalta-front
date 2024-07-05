import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.jpeg';
import './register.css'; 

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

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name) {
      valid = false;
      formErrors.name = 'Name is required';
    }
    if (!formData.phone) {
      valid = false;
      formErrors.phone = 'Phone number is required';
    }
    if (!formData.email) {
      valid = false;
      formErrors.email = 'Email is required';
    }
    if (!formData.city) {
      valid = false;
      formErrors.city = 'City is required';
    }
    if (!formData.sessionType) {
      valid = false;
      formErrors.sessionType = 'Session type is required';
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:3001/book-session', formData)
        .then(response => {
          console.log('Form Data Submitted:', response.data);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000); 
          setFormData({ 
            name: '',
            phone: '',
            email: '',
            city: '',
            sessionType: '',
            message: '',
            additionalDetails: '',
          });
        })
        .catch(error => {
          console.error('There was an error submitting the form!', error);
        });
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={logo} alt="Logo" style={{ maxWidth: '200px', margin: '20px auto' }} />
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        {success && <div className="success-message">Details submitted! We will get back to you shortly.</div>}
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
          {errors.name && <span className="error">{errors.name}</span>}
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
          {errors.phone && <span className="error">{errors.phone}</span>}
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
          {errors.email && <span className="error">{errors.email}</span>}
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
          {errors.city && <span className="error">{errors.city}</span>}
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
          {errors.sessionType && <span className="error">{errors.sessionType}</span>}
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
