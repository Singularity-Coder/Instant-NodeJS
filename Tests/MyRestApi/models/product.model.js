// https://mongoosejs.com/docs/schematypes.html

// Import mongoose
const mongoose = require("mongoose")

// Get schema from mongoose
const schema = mongoose.Schema

// Create a Product schema
const productSchema = new schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

// Create Product model from Product Schema
// "product" becomes "products" in mongoose. This is collections name.
const product = mongoose.model("product", productSchema)

// To use the above product model anywhere in this App, export this product model
module.exports = product