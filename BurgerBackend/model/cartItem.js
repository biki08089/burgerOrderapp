const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
    mobilenum:{
        type:Number,
        require:true,
    },
    defaultBreadQty:{
        type:String,
        require:true,
    },
    alooQty:{
        type:String,
        require:true,
    },
    paneerQty:{
        type:String,
        require:true,
    },
    cheeseQty:{
        type:String,
        require:true,
    },
    fixedPriceBread:{
        type:String,
        require:true,
    },
    alloTikkiPrice:{
        type:String,
        require:true,
    },
    paneerPrice:{
        type:String,
        require:true,
    },
    cheesePrice:{
        type:String,
        require:true,
    },
    totalPrice:{
        type:String,
        require:true,
    },
});

module.exports=mongoose.model("Cart",cartSchema);