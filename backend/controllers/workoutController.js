const { default: mongoose } = require('mongoose')
const Workout = require('../models/workoutModel')


//get all workouts

const getWorkouts = async (req, res) => {
    try {
            const allWorkouts = await Workout.find()
            res.status(200).json(allWorkouts)
        
    }
    catch (error){
        res.status(500).json(error)
    }
}

// get workout by id

const getWorkoutById = async (req, res) => {
    try{
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(500).json({msg: 'Invalid ID'})
        console.log(`ID is ${id}`)
        const workoutRecord = await Workout.findById(id);
        res.status(200).json(workoutRecord)
    }
    catch(err) {
        res.status(500).json(err)
    }
}



// update workout by id
const updateWorkoutById = async (req, res) => {
    try{
        
        res.status(501).json({msg: 'Not Implemented'})
    }

    catch(err){
        res.status(500).json({msg: 'Internal Server Error'})

    }
}

// delete workout by id
const deleteWorkoutById = async (req, res) => {
    try{
        id = mongoose.Types.ObjectId(id);
        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(500).json({msg: 'Invalid ID'})
        
        const deletedWorkout = await Workout.findByIdAndDelete(id = id)
        res.status(501).json(deletedWorkout)
    }

    catch(err){
        res.status(500).json({msg: 'Internal Server Error'})
    }
}


//add new workout
const createWorkout = async (req, res) => {

    const {title, reps, load} = req.body
    console.log({title, reps, load})
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(201).json(workout)
    }
    catch (error){
        console.log(error)
        res.status(500).json(error)
    }
}



module.exports = {
    getWorkouts, getWorkoutById, updateWorkoutById, deleteWorkoutById, createWorkout
}