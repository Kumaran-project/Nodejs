const express=require("express");
const app=express();
const path=require("path");
const rootDir=require("../util/pathFinder");
const router=express.Router();

router.use(express.urlencoded({ extended: false }))

router.get("/add-product",(req,res,next)=>{
  
  res.sendFile(path.join(rootDir,"views","add-product.html"));
})

router.post("/add-product", (req, res, next) => {
  console.log(req.body); 
  res.redirect("/");
});

module.exports=router;