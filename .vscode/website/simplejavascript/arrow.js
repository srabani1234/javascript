const sum =(a,b)=>{

    return `ther sum: ${a+b}`;

}
console.log(sum(1,2))

const sum1 =()=>{
let a,b;
    return `ther sum: ${(a=0)+(b=2)}`;

}
console.log(sum1())

var myArr =[100,200,250,300,350,400,450,500,600];
 const vert=myArr.forEach((element,index,array)=>{
if(element<400){
return `Elements: ${element}`;
}


});
console.log(vert);
console.log(myArr)
