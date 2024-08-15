const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 5000;


// Enable CORS
app.use(cors());

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://gurusukrutharaj16:0jzzLwsz9fxPBZKJ@cluster16.veym18o.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// // BMI schema and model
// const bmiSchema = new mongoose.Schema({
//   name: String,
//   gender: String,
//   weight: Number,
//   height: Number,
//   bmi: Number
// });

// const BMI = mongoose.model('BMI', bmiSchema);

// // Middleware
// app.use(bodyParser.json());

// // API endpoint to save BMI data
// app.post('/api/bmi', async (req, res) => {
//   const { name, gender, weight, height, bmi } = req.body;

//   try {
//     const newBMI = new BMI({ name, gender, weight, height, bmi });
//     await newBMI.save();
//     res.status(201).json({ message: 'BMI data saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to save BMI data', error });
//   }
// });

// Start the server
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});