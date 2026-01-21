const express = require("express");
const router = express.Router();
const Workout = require("../models/workoutModel");

router.get("/", (req, res) => {
  res.status(200);
  res.json({
    msg: "GET all workouts data",
  });
});

router.get("/:id", (req, res) => {
  res.status(200);
  res.json({
    msg: "GET a single workout data",
  });
});

router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  res.status(204);
  res.json({
    msg: "DELETE a single workout data",
  });
});

router.patch("/:id", (req, res) => {
  res.status(200);
  res.json({
    msg: "UPDATE a single workout data",
  });
});

module.exports = router;
