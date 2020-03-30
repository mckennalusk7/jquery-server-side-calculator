const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// users //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

app.get("/history", (req, res) => {
  res.send(history);
});

// Listener //
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
