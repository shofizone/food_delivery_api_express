const {body,header} = require('express-validator')


module.exports.getUserProfileValidator =[
    header('authorization')
        .not()
        .isEmpty()
        .withMessage('authorization field is required'),

]

