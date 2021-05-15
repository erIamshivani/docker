const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on http://localhost:3000");
});

// serve your css as static
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});