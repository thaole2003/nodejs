const express = require("express");
const app = express();

app.get("/abc", function (req, res) {
  let a = 5;
  const b = 5;

  res.send("Hello World");
});

app.listen(3030);
