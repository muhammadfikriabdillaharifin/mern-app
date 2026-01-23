const express = require("express");
const { getWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout } = require("../controllers/workoutController");
const router = express.Router();

// Get ALl workouts data
router.get("/", getWorkouts);

// Get a specific workout data
router.get("/:id", getWorkout);

// Create a new workout data
router.post("/", createWorkout);

// Update a specific workout data
router.patch("/:id", updateWorkout);

// Delete a specific workout data
router.delete("/:id", deleteWorkout);

module.exports = router;
