$(document).ready(init);

let operation = "";

function init() {
  $(".js-clear-btn").on("click", calcClear);
  $(".js-calculation-btn").on("submit", calcEquals);
  $(".js-add-btn").on("click", calcAddition);
  $(".js-subtract-btn").on("click", calcSubtract);
  $(".js-multiply-btn").on("click", calcMultiply);
  $(".js-divide-btn").on("click", calcDivide);

  // getEquations();
}

function calcAddition() {
  operation = "add";
}

function calcSubtract() {
  operation = "sub";
}

function calcMultiply() {
  operation = "multiply";
}

function calcDivide() {
  operation = "divide";
}

function calcEquals() {
  const serverData = {
    num1: $(".js-input-firstNumb").val(""),
    num2: $(".js-input-secondNumb").val(""),
    operation: operation
  };
}

function calcClear() {
  $(".js-input-firstNumb").val("");
  $(".js-input-secondNumb").val("");
  operation = "";
}
