// const express = require('express')
// const cors = require('cors')

// // Setup empty JS object to act as endpoint for all routes
// projectData = {};

// // Require Express to run server and routes

// // Start up an instance of app
// const app=express()
// /* Middleware*/
// //Here we are configuring express to use body-parser as middle-ware.
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Cors for cross origin allowance
// app.use(cors())
// // Initialize the main project folder
// app.use(express.static('website'));


// // Setup Server
// app.listen(3000, () => console.log(`server is running on port 3000`))
// app.post('/addWeather', (req, res) => {
//     const{newData,c,feel}=req.body
//         projectData.date=newData
//         projectData.feel = feel
//         projectData.c=c
//         res.end()
//     })
//     app.get('/getWeather', (req, res) => {
//     res.send(projectData)
// })