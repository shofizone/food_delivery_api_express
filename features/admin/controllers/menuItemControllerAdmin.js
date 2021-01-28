const {validationResult} = require('express-validator');
const FoodMenu = require('../../foodMenu/models/foodMenu')

exports.addNewMenu = async (req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let {name,description,position} = req.body;
    try{
        let newMenu = FoodMenu({
            name,description,position,
        });
        let doc =  await  newMenu.save();
        return res.status(201).json(doc);
    }catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
}