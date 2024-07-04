import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import logo from "./logo.jpeg"; 

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', formData)
      .then(response => {
        console.log('Form Data Submitted:', response.data);
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
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
        <label>
          Name of the Institution:
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleChange}
          />
        </label>
        <label>
          Contact Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Website Link:
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </label>
        <label>
          Address of Institution:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Licensing Details:
          <input
            type="text"
            name="licensing"
            value={formData.licensing}
            onChange={handleChange}
          />
        </label>
        <label>
          Specialisation and Services Offered:
          <input
            type="text"
            name="specialisation"
            value={formData.specialisation}
            onChange={handleChange}
          />
        </label>
        <label>
          Treatment Approach:
          <input
            type="text"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
          />
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
