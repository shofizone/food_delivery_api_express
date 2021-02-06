const express = require('express')
const router = express.Router()

const { getUserProfile,userLogin } = require('../controllers/userController')

const { getUserProfileValidator,loginValidator } = require('../middleware/userValidator')


/**
 * @swagger
 * /api/user/profile/:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve user profile
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/profile",getUserProfileValidator, getUserProfile)

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: User login
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            properties:
 *              email:
 *                type: string
 *                value: email@example.com
 *              password:
 *                type: string
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.post("/login",loginValidator, userLogin)



module.exports = router;