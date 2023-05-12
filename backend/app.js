const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully!",
  });
});

app.get("/api/posts", (req, res) => {
  const posts = [
    {
      id: "dqa2qdqr54t5t",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "fa2wfqa2f",
      title: "Second server-side post",
      content: "This is coming from the server too!",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully",
    payload: posts,
  });
});

module.exports = app;
