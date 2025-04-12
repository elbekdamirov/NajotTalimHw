const fs = require("fs");

try {
  const file = __dirname + "/fileToRead.txt";

  if (!fs.existsSync(file)) {
    throw new Error("FS operation failed");
  }
  data = fs.readFileSync(file, "utf-8");
  console.log(data);
} catch (error) {
  console.log(error);
}
