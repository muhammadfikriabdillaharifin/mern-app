const express = require("express");
const router = express.Router();

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

router.post("/", (req, res) => {
  res.status(201);
  res.json({
    msg: "POST a new workout data",
  });
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
