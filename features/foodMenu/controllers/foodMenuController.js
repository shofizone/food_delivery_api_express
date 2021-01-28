const {validationResult} = require('express-validator');
const FoodMenu = require('../models/foodMenu')

exports.getMenus = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        let doc = await FoodMenu.find();
        return res.status(200).json(doc);
    } catch (e) {
        // console.log(e);
        return res.sendStatus(400);
    }
}
exports.getAMenu = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const {id} = req.params.id;
        let doc = await FoodMenu.findOne({_id: id});
        if (!doc) {
            return res.sendStatus(404);
        }
        return res.status(200).json(doc);
    } catch (e) {
        // console.log(e);
        return res.sendStatus(400);
    }
}
