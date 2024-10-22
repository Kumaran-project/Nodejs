const express=require("express");
const path=require("path");
const rootDir=require("./util/pathFinder");
const app=express();
const productroutes=require("./Routes/admin");
const shopRoute=require("./Routes/shop")

app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,"public")));
app.use("/admin",productroutes);
app.use(shopRoute);

app.listen(4000,()=>{
  console.log("Server Started running on 4000 port");
})


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,"views","404.html"));
})