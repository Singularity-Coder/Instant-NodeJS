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

// Start the server on port 3000 and get the callback
app.listen(3000, () => {
    console.log("Server started on port 3000")
})

// Run app: npm start

