const Cart = require("../model/cartItem");

const getCartData = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    if (phoneNumber == null) {
      return res.status(199).json({
        success: false,
        massage: "Cart is empty.",
      });
    } else {
      const data = await Cart.find({ mobilenum: phoneNumber });

      return res.status(200).json({
        success: true,
        massage: "Cart Items fetched successfully.",
        items: data,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      success: false,
      massage: "server error: Couldn't fetch data.",
    });
  }
};

module.exports = getCartData;
