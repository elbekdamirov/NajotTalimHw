const fs = require("fs");

function writeNumbers() {
  const filePath = __dirname + "/sonlar.txt";
  const numbers = [];

  for (let i = 0; i < 100; i++) {
    const randomNumber = Math.floor(Math.random() * 1000);
    numbers.push(randomNumber);
  }

  fs.writeFileSync(filePath, numbers.join("\n"), "utf8");
}

function readNumbers() {
  const filePath = __dirname + "/sonlar.txt";

  try {
    const data = fs.readFileSync(filePath, "utf8");
    const numbersArray = data.split("\n");

    console.log("Numbers:", numbersArray);

} catch (error) {
    console.log(error);
  }
}

writeNumbers();
readNumbers();
