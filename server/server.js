const express = require("express");
const history = require("./history");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// users //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

//  getting numbers //
app.get("/math", (req, res) => {
  res.send(history);
});

// sending numbers and getting results //
app.post("/numbers", (req, res) => {
  res.send(numbers);

  //  changed parseFloat to parseInt
  const num1 = parseInt(numbers.num1);
  const num2 = parseInt(numbers.num2);
  const operator = numbers.operator;

  if (operator == "+") {
    numbers.total = num1 + num2;
  } else if (operator == "-") {
    numbers.total = num1 - num2;
  } else if (operator == "*") {
    numbers.total = num1 * num2;
  } else if (operator == "/") {
    numbers.total = num1 / num2;
  }
});

result = {
  result: calcEquals(num1, operator, num2)
};

app.get("/result", (req, res) => {
  res.send(result);
});

app.delete("/delete", (req, res) => {
  history.length = 0;
  console.log(history);
});

// Listening for server //
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
