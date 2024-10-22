const express=require("express");
const app=express();

app.use(express.urlencoded({ extended: false }))

app.listen(4000,()=>{
  console.log("Server Started running on 3000 port");
})

app.get("/add-product",(req,res,next)=>{
  console.log(req.body);
  res.send('<form action="/" method="POST"><input type="text" name="Add-Product"><input type="text" name="size"><button>submit</button></form>');
})

app.post("/",(req,res,next)=>{
  console.log(req.body)
 res.send(req.body);
})

app.use((req,res,next)=>{
  res.status(404).send("<h1>Oops page not found </h1>")
})