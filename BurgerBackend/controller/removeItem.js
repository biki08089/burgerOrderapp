const Cart=require("../model/cartItem");

const removeItem=async(req,res)=>{
    try {
        const{id}=req.body;
        console.log(id);
        
        const findAndRemove=await Cart.findByIdAndDelete({_id:id});

        return res.status(200).json({
            success:true,
            massage:"Item removed from the cart."
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            massage:"Error while removing items from the cart."
        })
    }
};

module.exports=removeItem;