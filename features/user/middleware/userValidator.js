const {body,header} = require('express-validator')


module.exports.getUserProfileValidator =[
    header('authorization')
        .not()
        .isEmpty()
        .withMessage('authorization field is required'),

]

module.exports.loginValidator =[
    body('email')
        .not()
        .isEmpty()
        .withMessage('email field is required'),

    body('password')
        .not()
        .isEmpty()
        .withMessage('password field is required'),

]

