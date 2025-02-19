import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { existsSync } from 'fs';
import userRoutes from "./routes/userRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables FIRST
const result = dotenv.config();
console.log("Dotenv config result:", result);
console.log("Current directory:", process.cwd());
console.log(".env file exists:", existsSync('.env'));
console.log("Environment variables:", {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT
});

import express from "express";
import { connect } from "mongoose";
import cors from "cors";

// Rest of your code remains the same...



// Load environment variables FIRST


// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

// Execute database connection
connectDB();

app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);


// Simple Route
app.get("/", (req, res) => {
  res.send("Fitness Tracker API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));