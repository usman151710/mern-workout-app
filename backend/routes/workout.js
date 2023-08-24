const express = require('express');
const { createWorkout, getAllWorkouts, getWorkoutByID, deleteWorkout, updateWorkout } = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

//require authentication for all routes
router.use(requireAuth);

router.get('/', getAllWorkouts);

router.get('/:id', getWorkoutByID);

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

module.exports = router;