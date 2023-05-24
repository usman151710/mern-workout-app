const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const workoutRoutes = require('./routes/workout');

const app = express();

app.listen(process.env.PORT);

app.use(express.json());

app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.DB_URI)
    .then((result) => {
    })
    .catch((err) => {
    })

app.get('/', (req, res) => {
    res.json({ msg: "Welecome to the app" })
})