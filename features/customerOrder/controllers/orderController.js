const {validationResult} = require('express-validator');
const Order = require('../models/order')
const Receipt = require('../models/receipt')
const {getIdFormAuthorization} = require('../../../core/utils/jwtUtil')

const DELIVERY_FEE = 50;


exports.createNewOrder = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const {menuItems} = req.body;
    const userId = await getIdFormAuthorization(req.headers.authorization)

    try {

        // let foodMenuList  = menuItems.map((e)=>{return {foodMenu:e}});
        // console.log(foodMenuList)
        let newOrder = Order({
            user: userId,
            menuItems: menuItems,
        })
        let doc = await newOrder.save();
        let finalReceipt = await completeOrderAndGenerateReceipt(doc._id);
        return res.status(200).json(finalReceipt);

    } catch (e) {

        console.log(e)
        return res.sendStatus(400);
    }
}

async function completeOrderAndGenerateReceipt(orderId) {
    let order = await Order.findOne({_id: orderId}).populate('menuItems');
    console.log(order);
    let {_id, user, menuItems} = order;
    if (menuItems) {
        try {
            let subTotal = 0.0;
            for (let i in menuItems) {
                subTotal = subTotal + menuItems[i].price
            }

            let items = menuItems.map((e) => e._id)
            let totalCost = subTotal + DELIVERY_FEE;
            let newReceiptObj = {
                order: _id,
                user,
                items,
                subTotalCost: subTotal,
                totalCost,
                deliveryFee: DELIVERY_FEE

            };
            let doc = await Receipt(newReceiptObj).save();
            let receipt = await doc.populate({
                path: "user order menuItems",
                select: "-password"
            }).execPopulate();

            let finalReceipt = await  receipt.populate({path:'order.menuItems'}).execPopulate();

            console.log(finalReceipt);
            return finalReceipt;

        } catch (e) {
            console.log(e)
            throw new Error("Unable to process order")
        }

    } else {
        throw new Error("Menu list is empty")
    }

}