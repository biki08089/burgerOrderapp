const Order = require("../model/placeOrder");
const Cart = require("../model/cartItem");

const placeOrder = async (req, res) => {
  try {
    const { mobilenum } = req.body;
    const token="BURG-"+crypto.randomUUID().split("-")[0];
    console.log(token);

    
    const findProducts = await Cart.find({ mobilenum: mobilenum });
    const myorder = await Order.create({ mobilenum:mobilenum,orderId:token,products: findProducts });
    const deleteCartProducts = await Cart.deleteMany({ mobilenum: mobilenum });
    
    console.log("I am product");
    console.log(myorder);
    return res.status(200).json({
        success: true,
        massage: "Order Placed Successfully",
        items:myorder
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
        success:true,
        massage:"Server error: Couldn't place order."
    })
  }
};

module.exports = placeOrder;
