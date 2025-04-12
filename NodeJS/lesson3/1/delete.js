const fs = require("fs");

try {
  file = __dirname + "/fileToRemove.txt";

  if (!fs.existsSync(file)) {
    throw new Error("FS operation failed");
  }
  fs.rmSync(file);
} catch (error) {
  console.log(error);
}
