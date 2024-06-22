const express=require("express");
const app=express();
require("dotenv").config();
const PORT=process.env.PORT;
const dbConnect=require("./config/database");
const router=require("./router/router")
const cors=require("cors");
console.log(PORT);


//middle ware for parsing the data.
app.use(express.json());
app.use(cors());
app.use("/api/v1",router)


app.listen(PORT,()=>{
    console.log(`We are listening at port no. ${PORT}`);
})
app.get("/",(req,res)=>{
  res.send("This is home page baby.")
})

dbConnect();
