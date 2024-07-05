const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const mongoURI = 'mongodb+srv://krish:Canada1234%40@cluster0.fstprdp.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

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

const sessionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  city: String,
  sessionType: String,
  message: String,
  additionalDetails: String,
});

const Session = mongoose.model('Session', sessionSchema);

const reportAbuseSchema = new mongoose.Schema({
  name: String,
  phone: String,
  description: String,
});

const ReportAbuse = mongoose.model('ReportAbuse', reportAbuseSchema);

app.post('/register', async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving form data');
  }
});

app.post('/book-session', async (req, res) => {
  try {
    const newSession = new Session(req.body);
    await newSession.save();
    res.status(200).send('Session data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving session data');
  }
});

app.post('/report-abuse', async (req, res) => {
  try {
    const newReportAbuse = new ReportAbuse(req.body);
    await newReportAbuse.save();
    res.status(200).send('Report abuse data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving report abuse data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
