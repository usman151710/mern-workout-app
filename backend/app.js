const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./routes/workout');

const app = express();

app.listen(process.env.PORT);

app.use(express.json());

app.use('/api/workouts', workoutRoutes)

app.get('/', (req, res) => {
    res.json({ msg: "Welecome to the app" })
})