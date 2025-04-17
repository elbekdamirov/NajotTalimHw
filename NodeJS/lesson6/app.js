const express = require("express");
const path = require("node:path");
require("dotenv").config();
const morgan = require("morgan");
const { title } = require("node:process");
const PORT = process.env.PORT || 3333;

const createViewPage = (page) => path.join(__dirname, "views", `${page}.ejs`);

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(createViewPage("index"), { title: "Main" });
});