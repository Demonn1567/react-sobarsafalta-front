// src/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (userEmail, userData) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // you can use other service providers
      auth: {
        user: process.env.EMAIL, // your email address
        pass: process.env.EMAIL_PASSWORD, // your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: 'Registration Successful',
      text: `Dear ${userData.username},\n\nThank you for registering. Here are your details:\n\nUsername: ${userData.username}\nEmail: ${userData.email}\nPhone: ${userData.phone}\n\nBest regards,\nYour Company`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
