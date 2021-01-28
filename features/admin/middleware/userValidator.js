const {body} = require('express-validator')

module.exports.createUserValidator =[

    body('name')
        .not()
        .isEmpty()
        .withMessage('name field is required'),

    body('email')
        .not()
        .isEmpty()
        .withMessage('email field is required'),

    body('password')
        .not()
        .isEmpty()
        .withMessage('password field is required'),

    body('address')
        .not()
        .isEmpty()
        .withMessage('password field is required'),

]