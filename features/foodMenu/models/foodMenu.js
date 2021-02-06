
const {Schema, model} = require("mongoose");

const foodMenuSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {type: String},
        price:{
            type:Number,
            required: true,
            default:0
        },
        position:{
            type:Number,
            required: true,
            default:0
        },
    },
    {
        timestamps: true,
    },
);
const FoodMenu = model("FoodMenu", foodMenuSchema);

module.exports = FoodMenu;
