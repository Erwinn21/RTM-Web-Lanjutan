const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    fs.read("index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(2000);
