const express = require('express')

const router = express.Router()

const Workout = require('../models/workoutModel')
router.get('/', (req, res) => {
    res.json({msg: 'GET all workouts'})
    console.log('/api/workouts/ hit' )
})

router.get('/:id', (req, res) => {
    id = req.params.id
    res.json({msg: `GET workout single with id ${id}`})
})

router.post('/', async (req, res) => {

    const {title, reps, load} = req.body
    console.log({title, reps, load})
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(201).json(workout)
    }
    catch (error){
        console.log(error)
    }
    //res.json({msg: "Add new workout"})
})

router.patch('/:id', (req, res) => {
    res.json({msg: "Update existing workout"})
})

router.delete('/:id', (req, res) => {
    res.json({msg: "delete existing workout"})
})

module.exports = router