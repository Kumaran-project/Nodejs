const express=require("express");
const app=express();
const router=express.Router();

router.use(express.urlencoded({ extended: false }))

router.get("/add-product",(req,res,next)=>{
  console.log(req.body);
  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="Add-Product"><input type="text" name="size"><button>submit</button></form>');
})

router.post("/add-product", (req, res, next) => {
  console.log(req.body); // Logs the submitted form data
  res.send("Product added: " + JSON.stringify(req.body));
});

module.exports=router;