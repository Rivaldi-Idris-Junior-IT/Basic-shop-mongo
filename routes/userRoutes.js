const express = require('express')
const router = express.Router()
const {authUser, getUserProfile, registerUser, updateUserProfile} = require('../controllers/userController')
const { Authenticate } = require('../middleware/authMiddleware')

router.post('/login', authUser)

router.route('/profile').get(Authenticate, getUserProfile).put(Authenticate, updateUserProfile)

router.post('/register', registerUser)

module.exports = router