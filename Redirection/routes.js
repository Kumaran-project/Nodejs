const fs = require("fs");
const reqHandler=(req, res) => {
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
      console.log(body);
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

}

module.exports=reqHandler;