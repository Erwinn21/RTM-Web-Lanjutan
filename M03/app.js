var express = require("express");
var server = express();

//https://github.com/expressjs/morgan
var logger = require("morgan");

server.get("/data", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

server.listen(3000, function () {
  console.log("Run");
});
