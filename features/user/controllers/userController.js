const User = require('../models/user')
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const {getIdFormAuthorization,generateAccessToken} = require("../../../core/utils/jwtUtil")
const StringResources = require('../../../core/resources/stringResources')

exports.getUserProfile = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const authHeader = req.headers.authorization;
    const id = getIdFormAuthorization(authHeader);
    try {
        const user = await User.findOne({_id: id}).select('-password -__v')
        if (!user) {
            return res.sendStatus(404);
        }
        return res.status(200).json(user);
    } catch (e) {
        console.log(e);
        return res.sendStatus(400)
    }
}

exports.userLogin = async (req, res, next) => {
    let { email, password } = req.body;

    try {
        let user = await User.findOne({
            email,
        });

        if (!user) {
            return res.status(403).json({
                message: StringResources.userDoesntExistText,
            });
        }

        let isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(403).json({
                message: StringResources.wrongCredentialsText,
            });
        }

        let accessToken = generateAccessToken(user)
        user.password = null;
        return res.status(200).json({
            accessToken:accessToken,
            user: user,
            message: StringResources.loginSuccessfulText,
        });
    } catch (e) {
        console.log(e);

        return res.status(402).json({
            message: StringResources.sorryFailedToLoginText,
        });
    }
};