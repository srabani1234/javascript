var myName = 'srabani ad';
console.log(myName);
// deffierence between null and undefine

// print null
var iAnUseless = null;
console.log(iAnUseless);
// datatype of null vale is object
console.log(typeof(iAnUseless));
// print undefine
var iAmNotUseless;
console.log(iAmNotUseless);
// data type of undifine value is undefine
console.log(typeof(iAmNotUseless));


//----------what is NaN?------
// NaN is a property of global object model like DOM, BOM. it mean not a number. if minus two string it give error as NaN

// post fix - first print data then increament

var x =5;
var y = x++;
console.log(x);
console.log(y);

// pre fix - first increament data then print data

var x =5;
var y = ++x + 1;
console.log(x);
console.log(y);

// use power in javascript
console.log(9**2);

// swap of two variable 
var a = 5;
var b=10;
var c = b;
b=a;
a=c;

// console.log(a);
// console.log(b);

//without using third variable
var a = 5;
var b=10;
a = a+b; // 15
b= a-b; //15-10
a=a-b; //15 -5
console.log(a);
console.log(b);

// code for veriy leap year

var year = 2020;
debugger;
if(year % 4 == 0){
    if(year % 100== 0){
        if(year % 400 ==0){
            console.log(year, ":Leap Year");
        }
        else{
console.log(year, ":not Leap Year");
    }
}

    else{
        console.log(year, ":Leap Year");

    }
}

else{
    console.log(year, ":not Leap Year");

}
// total we have 5 falsy in javascript 0,"",undefine,null,NaN. If use this falsy value in if condition then else statement should execute