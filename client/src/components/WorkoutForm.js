import React, { useState } from 'react';
import { addWorkout } from '../api';

const WorkoutForm = () => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleAddWorkout = async (e) => {
    e.preventDefault();
    const userId = 'some-user-id'; // Replace with actual user ID
    try {
      await addWorkout({ userId, exercise, duration, caloriesBurned });
      alert('Workout added!');
    } catch (error) {
      alert('Error adding workout');
    }
  };

  return (
    <form onSubmit={handleAddWorkout}>
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        placeholder="Exercise"
        required
      />
      <input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (minutes)"
        required
      />
      <input
        type="number"
        value={caloriesBurned}
        onChange={(e) => setCaloriesBurned(e.target.value)}
        placeholder="Calories Burned"
        required
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
