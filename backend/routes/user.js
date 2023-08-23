const express = require('express');
const { loginUser, signupUser } = require('../controllers/userController');
// const { createWorkout, getAllWorkouts, getWorkoutByID, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

const router = express.Router();


//login route
router.post('/login', loginUser);

//signup
router.post('/signup', signupUser)

module.exports = router;