const {body, header} = require('express-validator')

const {validateJwt} = require('../../../core/middleware/jwtValidator')


module.exports.validateNewOrder = [
    validateJwt,
    body('menuItems').custom(async (value, {req}) => {
        if (!value) {
            throw new Error('menuItems field is required');
        } else if (value.length < 1) {
            throw new Error('At least one menu item is required');
        } else {
            return true;
        }

    })


]