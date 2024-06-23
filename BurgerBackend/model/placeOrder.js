const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    orderId:{
       type:String,
       require:true,
    },
    mobilenum:{
        type:String,
        require:true,
    },
    totalPrice:{
        type:String,
        require:true,
    },
    products:{
        type:Array,
        require:true,
    },

})

module.exports=mongoose.model("Order",orderSchema);