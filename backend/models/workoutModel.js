//import requried modules
const mongoose = require('mongoose')


const Schema = mongoose.Schema

//add schema to check and enforce record structures before pushing data to database
const workoutSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
    
        reps: {
            type: Number,
            required: true
        },

        load: {
            type: Number,
            required: true
        }
    },

    {timestamps: true}
)

//export module to use in other files
module.exports = mongoose.model('Workout', workoutSchema)