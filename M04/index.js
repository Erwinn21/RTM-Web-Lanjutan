var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//https://github.com/expressjs/morgan
var logger = require("morgan");

app.use(logger("dev"));

// app.use(express.static(__dirname + "/index.html"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.get("/:data/:id/:namapasien", function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.send(req.params);
});

var dataPasien = bodyParser.urlencoded({ extended: false });
app.post("/api/pasien", dataPasien, function (req, res) {
  res.send(req.body);
});

app.listen(4000, function () {
  console.log("Run");
});
