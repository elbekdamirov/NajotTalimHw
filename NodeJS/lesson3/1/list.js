const fs = require("fs");

try {
  const firstPath = __dirname + "/files";
  const copyPath = __dirname + "/files_copy";

  if (!fs.existsSync(firstPath)) {
    throw new Error("FS operation failed");
  }

  fs.mkdirSync(copyPath);

  const files = fs.readdirSync(firstPath);

  files.forEach((file) => {
    const from = firstPath + "/" + file;
    const to = copyPath + "/" + file;
    fs.copyFileSync(from, to);
  });
} catch (err) {
  console.log("FS operation failed");
}
