// load variables from .env file to environment variables
require('dotenv').config()

// import requried modules
const mongoose = require('mongoose')
const express = require('express')

const workoutRoutes = require('./routes/workouts')


//create express app
const app = express()

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // if mongo connection is successfull, then only start listening to requests
    console.log('Connected to MongoDB, listening to requests starts')
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}!!`)
    })
})
.catch((error) => {
    console.log(error)
})

//middleware to automatically parse request data into json in req.body
app.use(express.json())

//middleware to log requests types and method on console
app.use(
    (req, res, next) => {
        console.log(req.path, req.method)
        next();

    }
)


//routes

//add workout router to app
app.use('/api/workouts', workoutRoutes);

