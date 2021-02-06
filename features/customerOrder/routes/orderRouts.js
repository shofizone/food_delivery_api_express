const express = require('express')
const router = express.Router()

const {createNewOrder} = require('../controllers/orderController')
const {validateNewOrder} = require('../../../features/customerOrder/middleware/orderValidator')


/**
 * @swagger
 * /api/order/:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new order (customer)
 *     description: Need send in body a list of ids of menu items.
 *     requestBody:
 *       content:
 *        application/json:
 *          schema:
 *            properties:
 *              menuItems:
 *                type: array
 *                items:
 *                  type:
 *                    - string
 *            required:
 *              - menuItems
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.post("/", validateNewOrder, createNewOrder)

module.exports = router;