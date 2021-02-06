const {validationResult} = require('express-validator');
const FoodMenu = require('../models/foodMenu')

exports.getMenus = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    let page = req.query.page || 1;
    let size = parseInt(req.query.size) || 10;
    let startIndex = (page - 1) * size;
    let endIndex = page * size;

    let result = {
        page:page,
        size: size,
        next: false,
        menus: [],
    };

    try {
        let count = await FoodMenu.countDocuments();
        if (endIndex < count) {
            result.next = true;
        }

        result.menus  = await FoodMenu.find()
            .sort({'position': 1})
            .limit(size)
            .skip(startIndex)
        ;
        return res.status(200).json(result);
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

