// mongodb+srv://omjadav04:omjadav04@cluster0.j0reum9.mongodb.net/ 


const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://omjadav04:omjadav04@cluster0.j0reum9.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var connection = mongoose.connection

connection.on('error', () => {
    console.log("mongoDB connection failed")
})

connection.on('connected', () => {
    console.log('MongoDB connection Successful!!')
})

module.exports = mongoose