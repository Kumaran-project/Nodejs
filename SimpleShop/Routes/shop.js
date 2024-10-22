const express=require("express");
const path=require("path");
const rootDir=require("../util/pathFinder");
const app=express();
const router=express.Router();



router.get("/",(req,res,next)=>{
  console.log(req.body)
  res.sendFile(path.join(__dirname,"..","views","shop.html"));
})


module.exports=router;