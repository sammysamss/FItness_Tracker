import express from "express";
import User from "../models/User.js";
const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(400).json({ message: 'Error registering user', error: err });
  }
});

// Login (for simplicity, just returning the user)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }
    res.status(200).json({ message: 'Login successful!', user });
  } catch (err) {
    res.status(400).json({ message: 'Error logging in', error: err });
  }
});

export default router;
