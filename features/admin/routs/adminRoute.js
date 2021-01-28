const express = require('express')
const router = express.Router()

const { getAllUser,createNewUser,getSingleUser,updateASingleUser } = require('../controllers/userControllerAdmin')

const { createUserValidator } = require('../middleware/userValidator')

router.get("/users", getAllUser)
router.get("/users/:id", getSingleUser)
router.patch("/users/:id", updateASingleUser)
router.post("/users",createUserValidator, createNewUser)


module.exports = router;