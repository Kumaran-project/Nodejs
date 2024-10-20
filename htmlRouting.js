const http=require("http");

const server = http.createServer((req, res) => {
  if(req.url==="/home")
  return res.end(JSON.stringify({
    data: 'Welcome home',
  }));

  if(req.url==="/about")
  return res.end(JSON.stringify({
    data: 'Welcome to About Us page',
  }));

  if(req.url==="/about")
    return res.end(JSON.stringify({
      data: 'Welcome to my Node Js project',
    }));

  
});

server.listen(4000,()=>{
  console.log("server started listening at 400")
});
