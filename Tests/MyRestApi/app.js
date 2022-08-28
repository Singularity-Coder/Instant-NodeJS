// https://www.youtube.com/watch?v=6vOZSUDgSoM&list=PLdHg5T0SNpN3EoN3PEyCmPR42Ok_44OFT&index=5
console.log("Express.js")

// Install express: npm install --save express
// This will add some code in package.json

// Import express in this App
const express = require('express')

// Init the app. This is the server.
const app = express()

// This is how you split the code to not bloat a single file
const productRoute = require("./routes/product.route")
app.use("/products", productRoute)

// Middleware: When the above operation fails it comes here. Used for handling invalid requests, sending error responses, etc
// If this is not there then a default HTML error is sent to user. Not good UX.
// All routes that are not handled by our App is handled by this middleware.
app.use((req, res, next) => {
    // res.status(404)
    // res.send({
    //     error: "Not found"
    // })

    // Creating custom error
    const err = new Error("Not found")
    err.status = 404

    // Use next object to pass the above error to the Error Handler below
    // This calls the operation below. U can call it from any route
    next(err)
})

// Express Error Handler: Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500) // If status is missing then default to 500 internal server error
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

// Start the server on port 3000 and get the callback
app.listen(3000, () => {
    console.log("Server started on port 3000")
})

// Run app: npm start

