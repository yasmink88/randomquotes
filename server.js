//we need to call epxress
const express = require("express");

//start express
const app = express();

//we need to tell express that we will be using EJS template engine
app.set("view engine", "ejs");

//creating routes
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});
app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

//start server (write node server)
app.listen(8080);
console.log("Server running!");
