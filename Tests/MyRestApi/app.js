// https://www.youtube.com/watch?v=6vOZSUDgSoM&list=PLdHg5T0SNpN3EoN3PEyCmPR42Ok_44OFT&index=5
console.log("Express.js")

// Install express: npm install --save express
// This will add some code in package.json

// Import express in this App
const express = require('express')
const { default: mongoose } = require('mongoose')

// Import mongo db
// const mongoose = require("mongoose")

// Init the app. This is the server.
const app = express()

// Middleware for logging req.body. This will ONLY parse the request body with the header of Content-Type of "application/json"
app.use(express.json())
// This will ONLY parse the request body with the header of Content-Type of "application/x-www-form-urlencoded". extended: true will make the url encoded form body work like json.
app.use(express.urlencoded({extended: true}))

// Connect to Remote mongodb
// mongodb+srv://singularitycoder:<password>@cluster0.baf4qp0.mongodb.net/?retryWrites=true&w=majority/dbName
// DB will be created only when the first item is added to the DB. Set 0.0.0.0/0 as IP to access it from any system.
mongoose.connect("mongodb+srv://cluster0.baf4qp0.mongodb.net/", {
    dbName: "MyRestApi",
    user: "",
    pass: "",
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Mongodb connected...")
})

// Connect to local mongodb. 27017 is the default port
// mongoose.connect("mongodb://localhost:27017/MyRestApi", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Mongodb connected...")
// })

// Parse Query Params
// app.all() route is a wildcard for all the http verbs. All http verbs are handled by this "all" route. We dont have to create a separate route for each of them. 
app.all("/query_params_test", (req, res) => {
    console.log(req.query)
    console.log(req.query.name)
    res.send(req.query)
})

// Parse Route Params
app.all("/route_params_test/:id/:name", (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

// Parse JSON Request Body Params
app.all("/json_request_body_params_test", (req, res) => {
    // To use req.body we need middleware app.use(express.json())
    console.log(req.body)
    res.send(req.body)
})

// Parse form-url-encoded Request Body Params
app.all("/form_url_encoded_request_body_params_test", (req, res) => {
    // To use req.body we need middleware app.use(express.urlencoded({extended: true}))
    console.log(req.body)
    res.send(req.body)
})

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

