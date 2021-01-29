const express = require('express')
const router = express.Router()


let userRoutes = require('../features/user/routes/userRoute');
let adminRoute = require('../features/admin/routes/adminRoute');
let foodMenuRoutes = require('../features/foodMenu/routes/foodMenuRoutes');

router.get("/", (req, res) => {
    res.status(200).json({message: "APIs for a food delivery company"});
})

router.use('/admin',adminRoute)
router.use('/user',userRoutes)
router.use('/food-menus',foodMenuRoutes)

module.exports = router;


