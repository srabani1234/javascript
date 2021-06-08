var arr =[1,2,3,4]
const red=arr.reduce((accumulated,ele,index,array)=>{

   console.log(`aa:${accumulated}`);
   console.log(`el:${ele}`);

    return accumulated+ele;
    
})

console.log(red);

// add element start using reduce

var arr1 =[1,2,3,4]
const red1=arr1.reduce((accumulated,ele,index,array)=>{

   console.log(`aa:${accumulated}`);
   console.log(`el:${ele}`);

    return accumulated+ele;
    
},7)


console.log(red1);
console.log(arr1);