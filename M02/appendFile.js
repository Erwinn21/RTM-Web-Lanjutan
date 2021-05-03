const fs = require("fs");

fs.appendFile("lorem.txt", "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",

function (err) {
  if (err) throw err;
  console.log("Saved.");
});