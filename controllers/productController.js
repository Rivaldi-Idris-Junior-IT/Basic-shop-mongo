const Product = require('../model/productModel')
const asyncHandler = require('express-async-handler')


// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})

    res.json(products)
})


// @desc Fetch single products
// @route GET /api/products
// @access Public
const getProductById = asyncHandler(async(req, res) => {
    const products = await Product.findById(req.params.id)

    if(products) {
         res.json(products)
    }else {
        res.status(404)
        throw new Error('Product not found')
    }    
})

module.exports = {getProducts, getProductById}