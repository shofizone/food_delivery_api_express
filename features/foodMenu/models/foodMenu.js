
const {Schema, model} = require("mongoose");

const foodMenuSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        description: {type: String},
        position:{
            type:Number,
        }
    },
    {
        timestamps: true,
    },
);
const FoodMenu = model("FoodMenu", foodMenuSchema);

module.exports = FoodMenu;
