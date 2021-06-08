let price =[100,200,250,300,350,400,450,500,600];

let newArr = price.filter((element,index,array) =>{
return element<100;

});
console.log(newArr);
