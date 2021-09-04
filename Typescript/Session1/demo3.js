// var, const, let
// var => scope global
// let => scope within that its nearest block
// {}
for (var i = 0; i < 4.; i++) {
    // console.log(i);    
}
// console.log("Value of i after loop "+i)
for (var j = 0; j < 4.; j++) {
    console.log(j);
}
// console.log("Value of j after loop "+j)
var pi = 3.14;
//scope => Global Scope
console.log("Pi value is " + pi);
