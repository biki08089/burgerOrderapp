const cartItem = require("../model/cartItem");
const Cart = require("../model/cartItem");

const createCart = async (req, res) => {
  try {
    //Extracting data from the request body..
    const {
      defaultBreadQty,
      alooQty,
      paneerQty,
      cheeseQty,
      fixedPriceBread,
      alloTikkiPrice,
      paneerPrice,
      cheesePrice,
      totalPrice,
      mobilenum,
    } = req.body;

    // creating an entry inside the database..
    if (mobilenum.length == 10) {
      const cartData = await Cart.create({
        defaultBreadQty,
        alooQty,
        paneerQty,
        cheeseQty,
        fixedPriceBread,
        alloTikkiPrice,
        paneerPrice,
        cheesePrice,
        totalPrice,
        mobilenum,
      });

      console.log(cartData);
      return res.status(200).json({
        success: true,
        massage: "Item added to the Cart.",
      });
    } else {
      return res.status(401).json({
        success: false,
        massage: "Invalid mobile number",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      success: false,
      massage: "Server error. Couldn't add items to the cart.",
    });
  }
};

module.exports = createCart;
