const http = require("http");
const fs = require("fs");

//buat object server dengan listen port 2000
http
  .createServer(function (req, res) {
    //menggunakan modul readFile
    fs.read("index.html", (err, data) => {
      //menampilkan pesan error ketika gagal baca file
      if (err) throw err;
      //http header
      res.writeHead(200, { "Content-Type": "text/html" });
      //melakukan respon ke browser/client berupa data dari file index.html
      res.write(data);
      //mengakhiri respon
      res.end();
    });
  })
  .listen(2000);
