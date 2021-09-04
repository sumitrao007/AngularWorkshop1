
// Function
// 1 function without parameter & without Return type
// 2 function with parameter & without Return type
// 3 function without parameter & with Return type
// 4 function with parameter & with Return type

function add1(){
    console.log("U R in Add1 Function "+(2+2));
}

// add1();

function add2(a:number,b:number){
    console.log("Addition is "+(a+b))
}

// add2(2,5);

function add3():number{
    return (5+5);

}

var res=add3();
// console.log(`Value of res is ${res}`)

function add4(a:number,b:number):number{
    return (a+b);
}

console.log(`Value of Add4 is ${add4(4,8)}`);











