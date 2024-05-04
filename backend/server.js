
require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

const workoutRoutes = require('./routes/workouts')
// express app
const app = express()

//connect to db

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB, listening to requests starts')
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}!!`)
    })
})
.catch((error) => {
    console.log(error)
})

//middleware to parse request data into json in req.body
app.use(express.json())

//middleware
app.use(
    (req, res, next) => {
        console.log(req.path, req.method)
        next();

    }
)
//routes

app.use('/api/workouts', workoutRoutes);

