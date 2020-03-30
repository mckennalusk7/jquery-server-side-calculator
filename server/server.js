const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

// const history = require("./history");

// users //
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static("server/public"));

// app.get("/history", (req, res) => {
//   res.send(history);
// });

// Listener //
app.listen(5000, () => {
  console.log("server running on port");
});
