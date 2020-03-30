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
app.get("/numbers", (req, res) => {
  res.send(history);
});

// sending numbers and getting results //
app.post("/numbers", (req, res) => {
  res.send(numbers);

  //  changed parseFloat to parseInt
  const equation ={
    num1 = parseInt(req.body.num1),
    num2 = parseInt(req.body.num2),
    operation: req.body.operation,
  };

  if (equation.operation === "+") {
    numbers.total = equation.num1 + equation.num2;
  } else if (equation.operation === "-") {
    numbers.total = equation.num1 - equation.num2;
  } else if (equation.operation === "*") {
    numbers.total = equation.num1 * equation.num2;
  } else if (equation.operation === "/") {
    numbers.total = equation.num1 / equation.num2;
  }


history.push(equation);

res.send(200);
});

// Listening for server //
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
