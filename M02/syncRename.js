const fs = require("fs");

try {
  fs.renameSync("data1.json", "data2.json");

  console.log("Name has been changed.");
} catch (err) {
  console.error(err);
}
