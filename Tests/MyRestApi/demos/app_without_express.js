// https://www.youtube.com/watch?v=f3ZHu526kpY&list=PLdHg5T0SNpN3EoN3PEyCmPR42Ok_44OFT&index=4
console.log("Built-In HTTP Module without Express.js")

// Create HTTP module for makeing API calls
const http = require('http')

// Create Server
// () => {} is a callback
const server = http.createServer((req, res) => {
    // If you dont send the response back to the client it the browser will remain in loading state
    // If you dont have any conditions then all the routes will lead to the same response

    // http://localhost:3000/
    if (req.url === '/') {
        if (req.method === "GET") console.log("Its a GET method")
        res.write("I am on Home...")
        res.end()
    } 
    
    // http://localhost:3000/products
    if (req.url === '/products') {
        if (req.method === "GET") console.log("Its a GET method")
        res.write("I am on Products List...")
        res.end()
    } 

    // http://localhost:3000/products/1234
    if (req.url === '/products/1234') {
        if (req.method === "GET") console.log("Its a GET method")
        res.write("I am on Product 1234 ...")
        res.end()
    } 
});

// Start server on port 3000
server.listen(3000, () => {
    // You get this callback once the server is started
    console.log("Server started on port 3000...")
})

// Do "npm start" after this and go to chrome -> http://localhost:3000/