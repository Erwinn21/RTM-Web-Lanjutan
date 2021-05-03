var fs = require("fs");

fs.open("datamw.txt", "w+", function (err, file) {
  if (err) throw err;

  let data = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
  
  fs.writeFile(file, data, (err) => {
    if (err) throw err;
    console.log("Saved.");
  });

  fs.readFile(file, (err, data) => {
    if (err) throw err;
    console.log(data.toString("utf8"));
  });
});
