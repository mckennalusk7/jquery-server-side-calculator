const express = require("express");
const history = require("./history");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// users //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("server/public"));

// sending numbers and getting results //
app.post("/numbers", (req, res) => {
    res.send(numbers);
});
const numbers = {
    num1=parseFloat(numbers.num1),
    num2= parseFloat(numbers.num2),
    operator= numbers.operator,
};


result = {
    result: calcEquals(num1, operator, num2)};
console.log('complete!');

app.get("/result", (req, res) => {
    res.send(result);
});

let calculationHistory ={};
calculationHistory = {
    num1,
    num2,
    operator,
};
history.push(calculationHistory);

app.get("/history", (req, res) => {
    res.send(history);
});

app.delete("/delete", (req, res) => {
    history.length = 0;
    console.log(history);
});

// Listening for server //
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
