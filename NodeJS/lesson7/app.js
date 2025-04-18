const express = require("express");
const path = require("node:path");
require("dotenv").config();
const morgan = require("morgan");
const axios = require("axios");
const { title } = require("node:process");

const PORT = process.env.PORT || 3333;
const createViewPage = (page) => path.join(__dirname, "views", `${page}.ejs`);

const app = express();
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("styles"));
app.use(express.static("images"));
app.use(morgan("short"));

app.get("/", (req, res) => {
  res.render(createViewPage("index"), { title: "Main" });
});

app.get("/teachers", async (req, res) => {
  try {
    const userData = await axios("https://jsonplaceholder.typicode.com/users");
    const teachers = userData.data;
    res.render(createViewPage("teachers"), { title: "Teachers", teachers });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading teachers data" });
  }
});

app.get("/students", (req, res) => {
  res.render(createViewPage("students"), { title: "Students" });
});

app.get("/groups", (req, res) => {
  res.render(createViewPage("groups"), { title: "Groups" });
});

app.get("/about", (req, res) => {
  res.render(createViewPage("about"), { title: "About" });
});

//------------------------------- Posts ----------------------------------------------------------//
app.get("/posts", async (req, res) => {
  try {
    const userData = await axios("https://jsonplaceholder.typicode.com/posts");
    const posts = userData.data;
    res.render(createViewPage("posts"), { title: "Posts", posts });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading teachers data" });
  }
});

app.get("/post/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    res.render(createViewPage("post"), { title: "Posts", post: data });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error on loading teachers data" });
  }
});

app.get("/add-post", (req, res) => {
  try {
    res.render(createViewPage("add-post"), { title: "Posts" });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
});

app.post("/add-post", async (req, res) => {
  try {
    const { title, body } = req.body;
    const userData = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title,
        body,
      }
    );
    const post = userData.data;
    res.render(createViewPage("post"), {
      title: "Posts",
      post,
    });
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
});

app.delete("/post/:postIdDel", async (req, res) => {
  try {
    const { postIdDel } = req.params;
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postIdDel}`
    );
    console.log(userData.data);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.send({ message: "Error in server" });
  }
});

//------------------------------- Posts End ----------------------------------------------------------//

app.use((req, res) => {
  res.render(createViewPage("404"), { title: "404" });
});

app.listen(PORT, () => {
  console.log(`Server started at: http://localhost:${PORT}`);
});
