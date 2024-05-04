// import required modules
const { default: mongoose } = require('mongoose')
const Workout = require('../models/workoutModel')


//controller to get all workouts
const getWorkouts = async (req, res) => {
    try {
            const allWorkouts = await Workout.find()
            res.status(200).json(allWorkouts)
        
    }
    catch (error){
        res.status(500).json(error)
    }
}

// controller to get workout by id
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



//TODO: controller to update workout by id
const updateWorkoutById = async (req, res) => {
    try{
        console.log({...req.body})
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, {...req.body})
        res.status(200).json(updatedWorkout)
    }

    catch(err){
        res.status(500).json({msg: 'Internal Server Error'})

    }
}

// Controller to delete workout by id
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


//controller to add new workout
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


//export controller functions to use in routes file.
module.exports = {
    getWorkouts, getWorkoutById, updateWorkoutById, deleteWorkoutById, createWorkout
}