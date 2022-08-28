const express = require('express')
const router = express.Router()

// GET Products route
router.get('/', (req, res, next) => {
    res.send("getting a list of all products...")
})

module.exports = router