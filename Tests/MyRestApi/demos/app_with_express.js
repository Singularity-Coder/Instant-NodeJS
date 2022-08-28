// https://www.youtube.com/watch?v=f3ZHu526kpY&list=PLdHg5T0SNpN3EoN3PEyCmPR42Ok_44OFT&index=4
console.log("Express.js")

// Install express: npm install --save express
// This will add some code in package.json

// Import express in this App
const express = require('express')

// Init the app. This is the server.
const app = express()

// GET Home route
app.get('/', (req, res, next) => {
    console.log(req.url)
    console.log(req.method)
    // Unlike in-built http routing, in Express u dont have to end the response. U just have to send something.
    res.send("I am the Home route")
})

// POST Home route
app.post('/', (req, res, next) => {

})

// DELETE Home route
app.delete('/', (req, res, next) => {

})

// PUT Home route
app.put('/', (req, res, next) => {

})

// PATCH Home route
app.patch('/', (req, res, next) => {

})

// Start the server on port 3000 and get the callback
app.listen(3000, () => {
    console.log("Server started on port 3000")
})

// Run app: npm start

