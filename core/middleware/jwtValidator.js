const {body, header} = require('express-validator')
const {isAccessTokenValid,validationResult } = require('../utils/jwtUtil');


module.exports.validateJwt = [

    header('authorization')
        .not()
        .isEmpty()
        .withMessage('authorization field is required'),

    header('authorization').custom(async (value,{req})=>{

        if (await isAccessTokenValid(req.headers.authorization) === false) {
            throw new Error('Invalid Access Token');
        }else{
            return true;
        }

    }),

    // async (req, res, next) => {
    //     let d = await isAccessTokenValid(req.headers.authorization)
    //     if(d===true){
    //         next();
    //     }else{
    //         validationResult(req).throw([
    //             {
    //                 error:"Invalid Access Token"
    //             }
    //         ]);
    //     }
    //
    // }


]

