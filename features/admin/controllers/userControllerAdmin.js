const User = require('../../user/models/user')
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

exports.getAllUser = async (req, res) => {
    try {
        const docs = await User.find().select("-__v -password")
        return res.status(200).json(docs);
    } catch (e) {
        console.log(e);
        return res.sendStatus(500)
    }
}
exports.getSingleUser = async (req, res) => {
    const {id} = req.params;
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
exports.updateASingleUser = async (req, res) => {
    const {id} = req.params;
    const {name, password, email, address} = req.body;
    const updateQuery = {
        name, email, address
    };

    if (address) {
        updateQuery.address = address;
    }
    if (email) {
        updateQuery.email = email;
    }
    if (name) {
        updateQuery.name = name;
    }
    if (password) {
        updateQuery.password = await bcrypt.hash(password, 8);
    }

    try {
        const user = await User.findOneAndUpdate({_id: id}, updateQuery).select("-password -__v")
        if (!user) {
            return res.sendStatus(404);
        }
        return res.status(200).json(user);
    } catch (e) {
        console.log(e);
        return res.sendStatus(400)
    }
}
exports.createNewUser = async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        const {name, email, address, password} = req.body;
        let hashPassword = await bcrypt.hash(password, 8);
        const newUser = User({
            name,
            email,
            address,
            password: hashPassword,
        });

        let doc = await newUser.save()
        console.log(doc);
        return res.status(201).json(doc);
    } catch (e) {
        console.log(e);
        return res.sendStatus(400)
    }


}