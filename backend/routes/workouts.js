const express = require("express");
const { getWorkouts, getWorkout, createWorkout } = require("../controllers/workoutController");
const router = express.Router();

router.get("/", getWorkouts);

router.get("/:id", getWorkout);

router.post("/", createWorkout);

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
