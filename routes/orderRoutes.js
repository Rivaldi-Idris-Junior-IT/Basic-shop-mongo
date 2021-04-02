const express = require('express')
const router = express.Router()
const { addOrderItems } = require('../controllers/orderController')
const { Authenticate } = require('../middleware/authMiddleware')

router.post('/', Authenticate, addOrderItems)

module.exports = router