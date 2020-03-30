$ (document.ready(init);

// let calculations = [];
// let operator= "";
// let num1 = "";
// let num2 = "";
// let answer= "";

function init(){
    console.log("LETS GO");

    $(".js-calculator").on("submit", calcEquals);
    $(".js-add-btn").on("click", calcAddition);
    $(".js-subtract-btn").on("click", calcSubtract);
    $(".js-multiply-btn").on("click", calcMultiply);
    $(".js-divide-btn").on("click", calcDivide);
    $(".js-clear-btn").on("click", calcClear);
});