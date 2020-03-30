const express = require("express");
const history = require("./history");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// users //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

app.post("/numbers", (req, res) => {
  res.send(numbers);
});
const numbers = {
    num1=parseFloat(numbers.num1),
    num2= parseFloat(numbers.num2),
    operator= numbers.operator,
};


app.get("/result", (req, res) => {
  res.send(result);
});

app.get("/history", (req, res) => {
  res.send(history);
});

app.delete("/delete", (req, res) => {
  history.length = 0;
  console.log(history);
});

// Listening for server //
app.listen(5000, () => {
  console.log("server running on port");
});
