const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    fs.readFile("./message.txt", (err, data) => {
      if (err) {
        if (err.code === "ENOENT") {
          fs.writeFile("./message.txt", "", (writeErr) => {
            console.log("File created");
          });
        }
      }
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write("<body>");
      res.write(`<p>${data}</p>`); // Display the content of the file
      res.write(
        '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
      );
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message + "\n", (err) => {
        if (err) throw err;
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  // } else {
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<html>");
  //   res.write("<head><title>My First Page</title></head>");
  //   res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  //   res.write("</html>");
  //   res.end();
  // }
});

server.listen(3000);
