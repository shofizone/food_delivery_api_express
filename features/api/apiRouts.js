const express = require('express')
const router = express.Router()


let userRoutes = require('../user/routs/userRoute');
let adminRoute = require('../admin/routs/adminRoute');
let foodMenuRoutes = require('../foodMenu/routes/foodMenuRoutes');

router.get("/", (req, res) => {
    res.status(200).json({message: "Hello"});
})

router.use('/admin',adminRoute)
router.use('/user',userRoutes)
router.use('/food-menus',foodMenuRoutes)

module.exports = router;


