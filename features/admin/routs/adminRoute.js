const express = require('express')
const router = express.Router()

const {
    getAllUser,
    createNewUser,
    getSingleUser,
    updateASingleUser,
    deleteSingleUser,
} = require('../controllers/userControllerAdmin')
const {addNewMenu} = require('../controllers/menuItemControllerAdmin')

const {createUserValidator} = require('../middleware/userValidator')

router.get("/users", getAllUser)
router.get("/users/:id", getSingleUser)
router.patch("/users/:id", updateASingleUser)
router.delete("/users/:id", deleteSingleUser)
router.post("/users", createUserValidator, createNewUser)
router.post("/food-menus", addNewMenu)


module.exports = router;