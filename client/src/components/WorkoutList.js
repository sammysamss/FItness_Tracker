import React, { useEffect, useState } from 'react';
import { getWorkouts } from '../api';

const WorkoutList = ({ userId }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await getWorkouts(userId);
        setWorkouts(data);
      } catch (error) {
        alert('Error fetching workouts');
      }
    };
    fetchWorkouts();
  }, [userId]);

  return (
    <div>
      <h2>Your Workouts</h2>
      {workouts.map((workout) => (
        <div key={workout._id}>
          <p>{workout.exercise}</p>
          <p>Duration: {workout.duration} minutes</p>
          <p>Calories Burned: {workout.caloriesBurned}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
