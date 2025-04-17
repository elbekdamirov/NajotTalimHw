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

app.get("/", (req, res) => {
  res.render(createViewPage("telephones"), { title: "Telephones" });
});

app.get("/", (req, res) => {
  res.render(createViewPage("planshets"), { title: "Planshets" });
});

app.get("/", (req, res) => {
  res.render(createViewPage("televisions"), { title: "Televisions" });
});

app.get("/", (req, res) => {
  res.render(createViewPage("laptops"), { title: "Laptops" });
});

app.get("/", (req, res) => {
  res.render(createViewPage("smartwatches"), { title: "Smartwatches" });
});

app.get("/", (req, res) => {
  res.render(createViewPage("ac"), { title: "AC" });
});

app.get("/", (req, res) => {
  res.render(createViewPage("fridges"), { title: "Fridges" });
});

app.get("/", (req, res) => {
  res.render(createViewPage("monitors"), { title: "Monitors" });
});

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
