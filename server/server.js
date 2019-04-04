const express = require("express");
const path = require("path");
// console.log(__dirname + "/../public");

var publicPath = path.join(__dirname + "/../public");
console.log(publicPath);
const app = express();

app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening port " + port);
});
