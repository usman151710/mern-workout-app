const express = require('express');
const Workout = require('../models/workout');
const { createWorkout, getAllWorkouts, getWorkoutByID } = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getAllWorkouts);

router.get('/:id', getWorkoutByID);

router.post('/', createWorkout);

router.patch('/:id', (req, res) => {
    res.json({ msg: "update a workout" })
});

router.delete('/:id', (req, res) => {
    res.json({ msg: "Delete single workout" })
});

module.exports = router;