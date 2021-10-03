const express = require("express");
const app = express();
const path = require(`path`);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/logged.html"));
});

app.get("/logged", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/logged.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/product.html"));
});

app.get("/deposit_ocbc", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/deposit_ocbc.html"));
});

app.get("/deposit_uob", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/deposit_uob.html"));
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
