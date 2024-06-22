const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=async()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("database connection successfull");
    }).catch((error)=>{
        console.log(error);
    })
};

module.exports=dbConnect;