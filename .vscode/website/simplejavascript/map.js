const arr = [1,2,3,4,5,6,7];
const mapData = arr.map((element,index,array)=>{
ele= element*2;
return ele

}).filter((element,index,array)=>{
    return element>10;
}).reduce((accumulator,ele,index,arr)=>{
    return accumulator+ele;
})
console.log(mapData);
console.log(arr)