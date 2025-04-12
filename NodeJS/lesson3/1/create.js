const fs = require("fs");

try {
  const file = __dirname + "/files";

  if (!fs.existsSync(file)) {
    fs.mkdirSync(file);
  }

  if (fs.existsSync(file + "/" + "fresh.txt")) {
    console.log("FS operation failed");
  } else {
    fs.writeFileSync(file + "/" + "fresh.txt", "I am fresh and young");
  }
} catch (error) {
  console.log(error);
}
