//import required modules
const express = require('express')

const {
    getWorkouts, getWorkoutById, updateWorkoutById, deleteWorkoutById, createWorkout
} = require('../controllers/workoutController')

// create router for /api/workouts
const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkoutById)

router.post('/', createWorkout)

router.patch('/:id', updateWorkoutById)

router.delete('/:id', deleteWorkoutById)

// export router to use in main server.js
module.exports = router