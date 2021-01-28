const express = require('express')
const router = express.Router()

const { getMenus,getAMenu } = require('../controllers/foodMenuController')
const { validateJwt } = require('../../../core/middleware/jwtValidator')

router.get("/", validateJwt ,getMenus)
router.get("/:id", validateJwt ,getAMenu)

module.exports = router;