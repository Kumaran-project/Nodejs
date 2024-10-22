const express=require("express");
const app=express();
const productroutes=require("./adminRoute");
const shopRoute=require("./shop")

app.use(express.urlencoded({ extended: false }))
app.use("/admin",productroutes);
app.use(shopRoute);

app.listen(4000,()=>{
  console.log("Server Started running on 4000 port");
})


app.use((req,res,next)=>{
  res.status(404).send("<h1>Oops page not found </h1>")
})