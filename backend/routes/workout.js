const express = require('express');
const { createWorkout, getAllWorkouts, getWorkoutByID, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getAllWorkouts);

router.get('/:id', getWorkoutByID);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

module.exports = router;