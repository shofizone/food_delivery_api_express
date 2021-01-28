const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        address: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            minlength: 3,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
const User = model("User", userSchema);

module.exports = User;
