const {Schema, model} = require("mongoose");

const receiptSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        order: {
            type: Schema.Types.ObjectId,
            ref: "Order",
            required: true
        },
        totalCost:{
            type:Number,
            default:0,
            required:true,
        },
        subTotalCost:{
            type:Number,
            default:0,
            required:true,
        },
        deliveryFee:{
            type:Number,
            default:0,
            required:true,
        }
    },
    {
        timestamps: true,
    },
);
const Receipt = model("Receipt", receiptSchema);

module.exports = Receipt;
