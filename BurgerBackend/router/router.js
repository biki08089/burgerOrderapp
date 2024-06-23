const express=require("express");
const Cart=require("../model/cartItem");
const createCart = require("../controller/createCartItem");
const getCartData = require("../controller/getCartData");
const placeOrder = require("../controller/placeOrder");
const orderDetails = require("../controller/getOrderDetails");
const router=express.Router();

// we are creating data inside db
router.post("/createcart",createCart)

//We are fetching cart data from the db.
router.post("/getcartdata",getCartData)

//Placing order
router.post("/placeorder",placeOrder);

//Fetching order details...
router.post("/getorders",orderDetails);
module.exports=router;