let operator;
let history;

$(document).ready(init);

function init() {
  console.log("LETS GO");

  calculationHistory();
  $(".js-operator-btn").on("click", () => event);
  $(".js-clear-btn").on("click", calcClear);
  $(".js-calculation-btn").on("submit", calcEquals);
  $(".js-add-btn").on("click", calcAddition);
  $(".js-subtract-btn").on("click", calcSubtract);
  $(".js-multiply-btn").on("click", calcMultiply);
  $(".js-divide-btn").on("click", calcDivide);
  {
    console.log("calculation");
  }
}
console.log;

function clearCalculations() {
  console.log("cleared on click");

  $(".js-input-firstNumb").val("");
  $(".js-input-secondNumb").val("");
}

function calcEquals() {
  console.log("submitted on click");
}

const newCalculation = {
  num1: $(".js-input-firstNumb").val(),
  num2: $(".js-input-secondNumb").val()
};
