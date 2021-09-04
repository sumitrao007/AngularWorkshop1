//Array basics

var a:number[]=[2,3,4,5];
var a1=[2,3,4,5,];
var a2=[];
var a4:number[]=[];

var a5=[2.5,"sumit",true,85];

// for (let i = 0; i < a.length; i++) {
//    console.log("Array value is "+a[i]+" Whose index is "+i);
    
// }

// console.log("Array Value is "+a);
// console.log("Array Value is "+a.join("$"));

// a.forEach((myvalue,i)=>{
//     console.log(`array value is a[${i}]=${myvalue}`);
// })

//push & pop method => LIFO=> Last in first out

var a6=[];

// a6.push(5);
// console.log(a6);
// a6.push(6,8,9,7);
// console.log(a6);

// var res=a6.pop();
// console.log(a6);
// console.log("Poped value is "+res);


var a7=[4,55,6,88,9];
// console.log("Original array "+a7);

a7.splice(2,0,70);
// console.log(a7);
a7.splice(3,1);
// console.log(a7);
a7.splice(3,2);
// console.log(a7);
a7.splice(2,1,80);
// console.log(a7);


a7.splice(2,0,78,96,100);
// console.log(a7);

// slice method
var a8=[44,15,22,86,78,41,52];
// console.log("Original Array "+a8);
var copyarray=a8.slice(1,5);
// console.log(copyarray);
// console.log(a8);

// console.log(a8.slice(1,10));


var a9=[];

// a9.pop();
// console.log(a9.pop());

function myrestParameter(...a:number[]){
    console.log(a);

}

myrestParameter(10,22,33,55,66,77,88);








