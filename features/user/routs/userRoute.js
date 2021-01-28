const express = require('express')
const router = express.Router()

const { getUserProfile } = require('../controllers/userController')

const { getUserProfileValidator } = require('../middleware/userValidator')

router.get("/profile-data",getUserProfileValidator, getUserProfile)



module.exports = router;