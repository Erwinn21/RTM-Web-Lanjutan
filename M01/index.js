const http = require("http");

//buat object server dengan listen port 2000
http
  .createServer(function (req, res) {
    //http header
    res.writeHead(200, { "Content-Type": "text/html" });
    //respon ke browser / client
    res.write("<h1>Header</h1>");
    //respon diakhiri
    res.end();
  })
  .listen(1000);
