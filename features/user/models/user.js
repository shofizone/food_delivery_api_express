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
            unique:true,
        },
        address: {
            type: String,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);
const User = model("User", userSchema);

module.exports = User;
