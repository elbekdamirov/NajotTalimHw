const http = require("http");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./views/index.html", (err, page) => {
      if (err) {
        res.end("Sahifani o'qishda xatolik");
        console.log(err);
      } else {
        res.end(page);
      }
    });
  } else if (req.url == "/literature") {
    fs.readFile("./views/literature.html", (err, page) => {
      if (err) {
        console.log(err);
        res.end("Sahifani o'qishda xatolik");
      } else {
        res.end(page);
      }
    });
  } else if (req.url == "/articles") {
    fs.readFile("./views/articles.html", (err, page) => {
      if (err) {
        console.log(err);
        res.end("Sahifani o'qishda xatolik");
      } else {
        res.end(page);
      }
    });
  } else if (req.url == "/dissertation") {
    fs.readFile("./views/dissertation.html", (err, page) => {
      if (err) {
        console.log(err);
        res.end("Sahifani o'qishda xatolik");
      } else {
        res.end(page);
      }
    });
  } else if (req.url == "/monograph") {
    fs.readFile("./views/monograph.html", (err, page) => {
      if (err) {
        console.log(err);
        res.end("Sahifani o'qishda xatolik");
      } else {
        res.end(page);
      }
    });
  } else if (req.url == "/universities") {
    fs.readFile("./views/universities.html", (err, page) => {
      if (err) {
        console.log(err);
        res.end("Sahifani o'qishda xatolik");
      } else {
        res.end(page);
      }
    });
  } else if (req.url == "/authors") {
    fs.readFile("./views/authors.html", (err, page) => {
      if (err) {
        console.log(err);
        res.end("Sahifani o'qishda xatolik");
      } else {
        res.end(page);
      }
    });
  } else if (req.url == "/journals") {
    fs.readFile("./views/journals.html", (err, page) => {
      if (err) {
        console.log(err);
        res.end("Sahifani o'qishda xatolik");
      } else {
        res.end(page);
      }
    });
  } else {
    fs.readFile("./views/404.html", (err, page) => {
      if (err) {
        console.log(err);
        res.end("Sahifani o'qishda xatolik");
      } else {
        res.end(page);
      }
    });
  }
});

server.listen(PORT, HOST, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server started at: http://${HOST}:${PORT}`);
  }
});
