var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//https://github.com/expressjs/morgan
var logger = require("morgan");

app.use(logger("dev"));

app.get("/:data/:id/:namapasien", function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.send(req.params);
});

app.get("/lingkaran", function (req, res) {
  var phi = 3.14;

  var jari = req.query.jari;
  console.log(`Jari-jari : ${jari}`);

  var rumus = phi * req.query.jari * req.query.jari;
  console.log(`Luas : ${rumus}`);
    
  res.write(`Luas : ${rumus}`);
  res.send(req.rumus);
});

app.listen(5000, function () {
  console.log("Run");
});
