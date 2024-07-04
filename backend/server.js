const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://ksharma8be23:p86z8U3SJYPMXI8r@cluster0.6ooff8v.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for your registration form data
const formSchema = new mongoose.Schema({
  institutionName: String,
  email: String,
  website: String,
  address: String,
  licensing: String,
  specialisation: String,
  treatment: String
});

const Form = mongoose.model('Form', formSchema);

// Endpoint to handle registration form submission
app.post('/register', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving form data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
