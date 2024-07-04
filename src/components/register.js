import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import logo from './logo.jpeg';

export default function Register() {
  const [formData, setFormData] = useState({
    institutionName: '',
    email: '',
    website: '',
    address: '',
    licensing: '',
    specialisation: '',
    treatment: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.institutionName) {
      valid = false;
      formErrors.institutionName = 'Institution name is required';
    }
    if (!formData.email) {
      valid = false;
      formErrors.email = 'Email is required';
    }
    if (!formData.website) {
      valid = false;
      formErrors.website = 'Website is required';
    }
    if (!formData.address) {
      valid = false;
      formErrors.address = 'Address is required';
    }
    if (!formData.licensing) {
      valid = false;
      formErrors.licensing = 'Licensing details are required';
    }
    if (!formData.specialisation) {
      valid = false;
      formErrors.specialisation = 'Specialisation is required';
    }
    if (!formData.treatment) {
      valid = false;
      formErrors.treatment = 'Treatment approach is required';
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post('http://localhost:3001/register', formData)
        .then(response => {
          console.log('Form Data Submitted:', response.data);
          setSuccess(true);
          setTimeout(() => setSuccess(false), 3000); // hide success message after 3 seconds
        })
        .catch(error => {
          console.error('There was an error submitting the form!', error);
        });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h1>Your journey to a substance-free life starts here.</h1>
      </header>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        {success && <div className="success-message">Details submitted! We will get back to you shortly.</div>}
        <label>
          Name of the Institution:
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
          />
          {errors.institutionName && <span className="error">{errors.institutionName}</span>}
        </label>
        <label>
          Contact Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>
        <label>
          Website Link:
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
          {errors.website && <span className="error">{errors.website}</span>}
        </label>
        <label>
          Address of Institution:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>
        <label>
          Licensing Details:
          <input
            type="text"
            name="licensing"
            value={formData.licensing}
            onChange={handleChange}
          />
          {errors.licensing && <span className="error">{errors.licensing}</span>}
        </label>
        <label>
          Specialisation and Services Offered:
          <input
            type="text"
            name="specialisation"
            value={formData.specialisation}
            onChange={handleChange}
          />
          {errors.specialisation && <span className="error">{errors.specialisation}</span>}
        </label>
        <label>
          Treatment Approach:
          <input
            type="text"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
          />
          {errors.treatment && <span className="error">{errors.treatment}</span>}
        </label>
        <button type="submit">Submit</button>
      </form>
      <footer>
        <nav>
        </nav>
      </footer>
    </div>
  );
}
