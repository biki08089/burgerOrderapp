const Order = require("../model/placeOrder");
const Cart = require("../model/cartItem");

const placeOrder = async (req, res) => {
  try {
    const { mobilenum,itemsPrice } = req.body;
    //Generating random unique number.
    const token="BURG-"+crypto.randomUUID().split("-")[0];
    
    // fetching data related to the "mobilenum"
    const findProducts = await Cart.find({ mobilenum: mobilenum });

    // creating an entry inside the db for order placed 
    const myorder = await Order.create({ mobilenum:mobilenum,orderId:token,totalPrice:itemsPrice,products: findProducts });
    
    // Deleting items from the cart after placing a successfull order
    const deleteCartProducts = await Cart.deleteMany({ mobilenum: mobilenum });
    
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
