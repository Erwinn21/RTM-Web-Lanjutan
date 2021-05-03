const fs = require("fs");

fs.rename("namaJson1.json", "namaJson2.json", (err) => {
  if (err) {
    return console.error(err);
  }
  
  console.log("Name has been changed.");
});
