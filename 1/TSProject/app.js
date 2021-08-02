var Name = "Osama";
//Error (Data Type)
//Name = 1;
var IsUpdated = false;
var Num = 1;
//Data Type Take From Initial Create
// var Num1 = 7;
// Num1 = "a";
//Data Type Can Change
var NumAny = 5;
NumAny = "";
function Add(num1, num2) {
    return num1 + num2;
}
var Summation = Add(1, 2);
console.log(Summation);
var Num1 = document.getElementById("Num1");
var Num2 = document.getElementById("Num2");
function Sum(Num1, Num2) {
    return Num1 + Num2;
}
function PrintResult() {
    console.log(console.log(Sum(Num1.value, Num2.value)));
}
