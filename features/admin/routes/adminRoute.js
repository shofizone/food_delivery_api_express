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
const {createFoodValidator} = require('../middleware/foodMenuValidator')


/**
 * @swagger
 * /api/admin/users/:
 *   get:
 *     summary: Retrieve all users
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/users", getAllUser)
/**
 * @swagger
 * /api/admin/users/{id}:
 *   get:
 *     parameters:
 *       - in: id
 *         name: id
 *     summary: Retrieve a single user
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/users/:id", getSingleUser)
/**
 * @swagger
 * /api/admin/users/{id}:
 *   patch:
 *     summary: Update a user
 *     description: No authentication required for simplicity (Admin)
 *     parameters:
 *       - in: id
 *         name: id
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              address:
 *                type: string
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.patch("/users/:id", updateASingleUser)
/**
 * @swagger
 * /api/admin/users/{id}:
 *   delete:
 *     summary: Delete new user
 *     description: No authentication required for simplicity (Admin)
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.delete("/users/:id", deleteSingleUser)


/**
 * @swagger
 * /api/admin/users:
 *   post:
 *     summary: Create new user
 *     description: No authentication required for simplicity (Admin)
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            properties:
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              address:
 *                type: string
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.post("/users", createUserValidator, createNewUser)


/**
 * @swagger
 * /api/admin/food-menus:
 *   post:
 *     summary: Create new food menu
 *     description: No authentication required for simplicity (Admin)
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            properties:
 *              name:
 *                type: string
 *              description:
 *                type: string
 *              price:
 *                type: number
 *              position:
 *                type: number
 *     responses:
 *       201:
 *         description: Success
 *
 */
router.post("/food-menus",createFoodValidator, addNewMenu)


module.exports = router;