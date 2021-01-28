const express = require('express')
const router = express.Router()

const { getUserProfile,userLogin } = require('../controllers/userController')

const { getUserProfileValidator } = require('../middleware/userValidator')

router.get("/profile",getUserProfileValidator, getUserProfile)
router.post("/login", userLogin)



module.exports = router;