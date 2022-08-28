const express = require('express')
const router = express.Router()

// GET Product List: http://localhost:3000/products
router.get('/', (req, res, next) => {
    res.send("getting a list of all products...")
})

// POST Product: http://localhost:3000/create_product
router.post('/create_product', (req, res, next) => {
    res.send("creating an item")
})

// GET Product by ID: http://localhost:3000/products/id
router.get('/:id', (req, res, next) => {
    res.send("getting an item")
})

// PATCH Product by ID: http://localhost:3000/products/id
router.patch('/:id', (req, res, next) => {
    res.send("updating an item")
})

// DELETE Product by ID: http://localhost:3000/products/id
router.delete('/:id', (req, res, next) => {
    res.send("deleting an item")
})

// POST Product by ID: http://localhost:3000/products/create_category
router.post('/create_category', (req, res, next) => {
    next(new Error("cannot create category. Something went wrong"))
})

module.exports = router