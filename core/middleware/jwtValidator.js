const {body, header} = require('express-validator')
const {isAccessTokenValid,validationResult } = require('../utils/jwtUtil');


module.exports.validateJwt = header('authorization').custom(async (value,{req})=>{

        if(!value){
            throw new Error('Please provide a access token');
        }
        if (await isAccessTokenValid(req.headers.authorization) === false) {
            throw new Error('Invalid Access Token');
        }else{
            return true;
        }

    });





