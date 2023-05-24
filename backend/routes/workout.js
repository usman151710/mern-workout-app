const express = require('express');
const Workout = require('../models/workout');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: "Get all workouts" })
});

router.get('/:id', (req, res) => {
    res.json({ msg: "Get single workout" })
});

router.post('/', async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.patch('/:id', (req, res) => {
    res.json({ msg: "update a workout" })
});

router.delete('/:id', (req, res) => {
    res.json({ msg: "Delete single workout" })
});

module.exports = router;