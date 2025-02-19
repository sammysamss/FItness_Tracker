import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Backend URL

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add workout
export const addWorkout = async (workoutData) => {
  try {
    const response = await axios.post(`${API_URL}/workouts/add`, workoutData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get all workouts for a user
export const getWorkouts = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/workouts/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
