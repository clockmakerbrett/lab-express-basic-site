const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/guitar", (req, res) => {
  res.sendFile(__dirname + "/views/guitar.html");
});

app.get("/history", (req, res) => {
  res.sendFile(__dirname + "/views/history.html");
});

app.listen(3000);
