const express = require('express')

const router = express.Router()

const {
    getWorkouts, getWorkoutById, updateWorkoutById, deleteWorkoutById, createWorkout
} = require('../controllers/workoutController')

router.get('/', getWorkouts)

router.get('/:id', getWorkoutById)

router.post('/', createWorkout)

router.patch('/:id', updateWorkoutById)

router.delete('/:id', deleteWorkoutById)

module.exports = router