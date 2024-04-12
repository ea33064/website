const express = require("express");
const app = express();

// Define port and use 3000 as default
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Friends!");
});

// Start the server
app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
