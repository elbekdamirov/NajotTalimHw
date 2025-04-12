const fs = require("fs");

if (!fs.existsSync("./product.json")) {
  fs.writeFileSync("./product.json", JSON.stringify([]));
}

function readData() {
  return JSON.parse(fs.readFileSync("./product.json", "utf-8"));
}

function writeData(books) {
  fs.writeFileSync("./product.json", JSON.stringify(books));
}

class Book {
  findAll() {
    let books = readData();
    console.log("All books:", books);
  }

  findOne(id) {
    let books = readData();
    let book = books.find((val) => val.id == id);
    if (book) {
      console.log("Find book:", book);
    } else {
      console.log("Not found book");
    }
  }

  create(data) {
    let books = readData();
    let leng = books.length;
    books.push({
      id: leng == 0 ? 1 : books.at(-1).id + 1,
      ...data,
    });
    writeData(books);
  }

  update(id, data) {
    let books = readData();
    let bookIndex = books.findIndex((val) => val.id == id);
    if (bookIndex == -1) {
      console.log("Not found book");
      return;
    }
    books[bookIndex] = {
      ...books[bookIndex],
      ...data,
    };
    writeData(books);
  }

  remove(id) {
    let books = readData();
    books = books.filter((val) => val.id != id);
    writeData(books);
  }
}

let books = new Book();
// books.findAll();
// books.findOne(1);
// books.create({ name: "Xamsa", author: "Alisher Navoiy", total_page: 456 });
// books.create({ name: "Devoni Lug'otit Turk", author: "Mahmud Koshg'ariy", total_page: 600 });
// books.update(1, { total_page: 500 });
books.findAll();
