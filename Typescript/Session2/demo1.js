//anonyumous function
var temp = function () {
    console.log("First Function called");
};
//  temp();
var temp2 = function (a, b) {
    return (a + b);
};
// console.log(temp2(8,8));
// fat arrow function
var temp3 = function () {
    console.log("Fat arrow Function...");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// console.log("fat arrow function "+temp4(5,4));
// Optional parameter Function
function add2(a, b) {
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
    console.log("Addition of a+b is " + (a + b));
}
// add2(6);
function add3(a, b) {
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
    console.log("Addition of a+b is " + (a + b));
}
// add3(5);
//Default parameter function
var temp5 = function (a, b) {
    if (a === void 0) { a = 6; }
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
    console.log("Addition of a+b is " + (a + b));
};
// temp5(2);
var temp6 = function (a, b) {
    if (b === void 0) { b = 9; }
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
    console.log("Addition of a+b is " + (a + b));
};
temp6(9, 10);
