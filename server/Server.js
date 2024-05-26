// server.js
// Import required modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config as configDotenv } from "dotenv";
import User from "./contactModel.js";

configDotenv();

// Initialize express app and define port
const app = express();
const PORT = 9002;

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/database-mgmt").then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Middleware
app.use(express.json());
app.use(cors());

// Check if user already exists
async function userExists(email) {
  const existingUser = await User.findOne({ email });
  return !!existingUser;
}

// Create a new user
app.post("/api/contact", async(req, res) => {
  const { firstName, lastName, email, choice , phone, message  } = req.body;

  // Check if user already exists
  const userAlreadyExists = await userExists(email);
  if (userAlreadyExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const newUser = new User({
    firstName,
    lastName,
    email,
    choice,
    phone,
    message,
  });

  try {
    // Save new user to database
    const savedUser = await newUser.save();
    console.log(savedUser);
    res.status(201).send({
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      choice: savedUser.choice,
      phone: savedUser.phone,
      message: savedUser.message
    });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
