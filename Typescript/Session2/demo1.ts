
//anonyumous function

 var temp=function (){
     console.log("First Function called");
 }

//  temp();

var temp2=function (a:number,b:number):number{
        return (a+b);
}

// console.log(temp2(8,8));

// fat arrow function
   var temp3= ()=>{
        console.log("Fat arrow Function...");
    }

    // temp3();

  var temp4=(a:number,b:number):number=>{
        return (a+b);
    }
// console.log("fat arrow function "+temp4(5,4));

// Optional parameter Function

function add2(a:number,b?:number){

    console.log("Value of a is "+a);
    console.log("Value of b is "+b);
    console.log("Addition of a+b is "+(a+b));

}

// add2(6);

function add3(a?:number,b?:number){

    console.log("Value of a is "+a);
    console.log("Value of b is "+b);
    console.log("Addition of a+b is "+(a+b));

}

// add3(5);

//Default parameter function

var temp5=(a:number=6,b?:number)=>{
    console.log("Value of a is "+a);
    console.log("Value of b is "+b);
    console.log("Addition of a+b is "+(a+b));
}

// temp5(2);

var temp6=(a:number,b:number=9)=>{
    console.log("Value of a is "+a);
    console.log("Value of b is "+b);
    console.log("Addition of a+b is "+(a+b));
}

temp6(9,10);


