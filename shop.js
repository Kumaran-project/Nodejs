const express=require("express");
const app=express();
const router=express.Router();



router.get("/",(req,res,next)=>{
  console.log(req.body)
  res.send("Welcome to the shop!");
})


module.exports=router;