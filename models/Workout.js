import mongoose from 'mongoose';


const workoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  exercise: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  caloriesBurned: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
