const User = require('../models/user')
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const {getIdFormAuthorization} = require("../../../core/utils/jwtUtil")

exports.getUserProfile = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const authHeader = req.headers.authorization;
    const id = getIdFormAuthorization(authHeader);
    try {
        const user = await User.findOne({_id: id})
        if (!user) {
            return res.sendStatus(404);
        }
        return res.status(200).json(user);
    } catch (e) {
        console.log(e);
        return res.sendStatus(400)
    }
}