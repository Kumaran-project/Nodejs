const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("first Middleware the request hit");
  console.log("Requested URL:", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("second Middleware the request hit");
  res.send("<h1> hello to node js </h1>");
});

app.listen(3000);
