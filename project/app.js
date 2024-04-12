const express = require("express");
const path = require("path");

const app = express();

// Define port and use 3000 as default
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.static("src/views"));
app.use(express.static("bower_components"));

app.get("/", (req, res) => {
  res.send("Hello Friends!");
});

// Start the server
app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
