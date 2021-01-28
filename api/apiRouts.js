const express = require('express')
const router = express.Router()


let userRoutes = require('../features/user/routs/userRoute');
let adminRoute = require('../features/admin/routs/adminRoute');
let foodMenuRoutes = require('../features/foodMenu/routes/foodMenuRoutes');

router.get("/", (req, res) => {
    res.status(200).json({message: "Hello"});
})

router.use('/admin',adminRoute)
router.use('/user',userRoutes)
/**
 * @swagger
 * /api/food-menus/:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a list of foods-menu
 *
 */
router.use('/food-menus',foodMenuRoutes)

module.exports = router;


