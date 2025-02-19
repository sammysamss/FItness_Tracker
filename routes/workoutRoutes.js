import express from "express";
import Workout from "../models/Workout.js";
const router = express.Router();

// Add a new workout
router.post('/add', async (req, res) => {
  const { userId, exercise, duration, caloriesBurned } = req.body;
  try {
    const newWorkout = new Workout({ userId, exercise, duration, caloriesBurned });
    await newWorkout.save();
    res.status(201).json({ message: 'Workout added successfully!' });
  } catch (err) {
    res.status(400).json({ message: 'Error adding workout', error: err });
  }
});

// Get all workouts for a user
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const workouts = await Workout.find({ userId });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching workouts', error: err });
  }
});

export default router;
