const {body} = require('express-validator')

module.exports.createFoodValidator =[

    body('name')
        .not()
        .isEmpty()
        .withMessage('name field is required'),

    body('description')
        .not()
        .isEmpty()
        .withMessage('description field is required'),
    body('price')
        .not()
        .isEmpty()
        .withMessage('price field is required'),

]