const express = require('express')
const router = express.Router()

const { getMenus,getAMenu } = require('../controllers/foodMenuController')
const { validateJwt } = require('../../../core/middleware/jwtValidator')

/**
 * @swagger
 * /api/food-menus/:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a single food menu
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/", validateJwt ,getMenus)

/**
 * @swagger
 * /api/food-menus/{id}:
 *   get:
 *     parameters:
 *       - in: path
 *         name: id
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a list of foods-menu
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/:id", validateJwt ,getAMenu)

module.exports = router;