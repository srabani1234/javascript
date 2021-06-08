const jonas ={
firstName : "srabani",
lastName : "Adhikary",
age: 2037-1991,
job: "teacher",
friends: ["mary","te","fe"]

}
jonas.location= "austerila";
jonas["twitr"]="@srabani"
console.log(jonas)
//console.log(jonas['firstName','lastName'])

const InteresetIn = prompt("what you want to know about jonas?choose betwen firstName,lastName,age,job,friends,location,twiter");//return string value
console.log(jonas[InteresetIn]) // it print undefine when don't know InteresetIn by jonas. prompt return string value that store in InteresetIn
if(jonas[InteresetIn]){
    console.log(jonas[InteresetIn])
   

}
else{
    console.log('wrong request chosse between firstName,lastName,age,job,friends,location,twiter')
}

