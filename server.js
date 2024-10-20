const http=require("http");

const server = http.createServer((req, res) => {
  
  res.end(JSON.stringify({
    data: 'Thanga Bal Kumaran',
  }));
});

server.listen(4000,()=>{
  console.log("server started listening at 400")
});