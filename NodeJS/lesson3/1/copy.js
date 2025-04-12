const fs = require("fs");

try {
  const firstPath = __dirname + "/files";

  if (!fs.existsSync(firstPath)) {
    throw new Error("FS operation failed");
  }

  const files = fs.readdirSync(firstPath);
  console.log(files);
} catch (err) {
  console.log("FS operation failed");
}
