// src/routes/register.js
const express = require('express');
const router = express.Router();
const sendEmail = require('../sendEmail'); // Adjust the path as necessary

router.post('/api/register', async (req, res) => {
  const { email, username, phone, password } = req.body;

  const newUser = { email, username, phone, password };

  try {
    // Simulate saving the user to the database
    const savedUser = newUser; 

    // Send the email
    await sendEmail(savedUser.email, savedUser);

    res.status(201).json({ message: 'User registered successfully', user: savedUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user', error });
  }
});

module.exports = router;
