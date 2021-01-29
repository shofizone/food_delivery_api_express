const {Schema, model} = require("mongoose");

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        menuItems: [
            {
                    type: Schema.Types.ObjectId,
                    ref: "FoodMenu"
            }
        ]
    },
    {
        timestamps: true,
    },
);
const Order = model("Order", orderSchema);

module.exports = Order;
