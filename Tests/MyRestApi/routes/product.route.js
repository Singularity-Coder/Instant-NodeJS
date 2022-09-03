const express = require('express')

// Import product.model.js -> Since we are in routes dir, Go up one level to access models dir ../models
const Product = require('../models/product.model')

const router = express.Router()

// GET Product List: http://localhost:3000/products
router.get('/', (req, res, next) => {
    res.send("getting a list of all products...")
})

// POST Product: http://localhost:3000/create_product
// "_id": "630e44e54b468d2ea86ec3c5", "__v": 0 are created by mongo db
// https://stackoverflow.com/questions/67852430/referenceerror-cannot-access-module-before-initialization
router.post('/create_product', (req, res, next) => {
    console.log(req.body)
    // Class variable and instance variables must have different names. So all vars have to be across class.
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    })
    // save() is a promise
    product.save()
        .then(result => {
            console.log(result)
            res.send(result) // result is the product created in the DB
        })
        .catch(err => {
            console.log(err.message)
        })
})

// GET Product by ID: http://localhost:3000/products/id
router.get('/:id', (req, res, next) => {
    res.send("getting a product")
})

// PATCH Product by ID: http://localhost:3000/products/id
router.patch('/:id', (req, res, next) => {
    res.send("updating a product")
})

// DELETE Product by ID: http://localhost:3000/products/id
router.delete('/:id', (req, res, next) => {
    res.send("deleting a product")
})

// POST Product by ID: http://localhost:3000/products/create_category
router.post('/create_category', (req, res, next) => {
    next(new Error("cannot create category. Something went wrong"))
})

module.exports = router