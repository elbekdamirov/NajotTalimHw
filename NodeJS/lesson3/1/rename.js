const fs = require("fs");

function renameFile() {
  try {
    const oldPath = __dirname + "/wrongFilename.txt";
    const newPath = __dirname + "/properFilename.md";

    if (!fs.existsSync(oldPath)) {
      throw new Error("FS operation failed: wrongFilename.txt does not exist");
    }

    if (fs.existsSync(newPath)) {
      throw new Error("FS operation failed: properFilename.md already exists");
    }

    fs.renameSync(oldPath, newPath);
    console.log("File nomi ozgartirildi!");
  } catch (error) {
    console.log(error);
  }
}
console.log(__dirname);
renameFile();
