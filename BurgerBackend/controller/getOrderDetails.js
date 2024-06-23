const Order=require("../model/placeOrder");

const orderDetails=async(req,res)=>{
    try {
        const {mobilenum}=req.body;
        
        //Here we are fetching the order details from the db...
        const orderDetails=await Order.find({mobilenum:mobilenum})

        return res.status(200).json({
            success:true,
            massage:"Order details fetched successfully",
            orders:orderDetails
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            massage:"Couldn't fetch order details."
        })
    }
}

module.exports=orderDetails;