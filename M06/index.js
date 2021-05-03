var express = require("express");
var app = express();

//https://github.com/expressjs/morgan
var logger = require("morgan");

app.use(logger("dev"));

const pendaftaran = (req, res, next) => {
  if (req.params.data === "Pasien",req.params.id === "P01",req.params.namapasien === "Adit") {
    console.log("Pasien Telah Terdaftar");
    next();
  }
  
  else {
    const err = {
      status: "Pasien Belum Terrdaftar",
      data: {
        data : req.params.data,
        id : req.params.id,
        nama : req.params.namapasien,
      },
    };
    next(err);
  }
};

app.get("/:data/:id/:namapasien", pendaftaran, function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.send(req.params);
});

app.use((error, req, res, next) => {
  res.send(error);
});

app.listen(5500, function () {
  console.log("Run");
});
