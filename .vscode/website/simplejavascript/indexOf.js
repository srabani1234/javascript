var myArr = ['vinod','bahadur','thapa','technical','thapa'];
console.log(myArr.lastIndexOf('thapa',3));

var myFind = [200,250,300,350,400,450,500,600];

const findEle = myFind.find( (element,index,array) => {
return element<200;
});

console.log(findEle);


const findEle1 = myFind.findIndex( (element,index,array) => {
    console.log(index);
    return element>400;
    });
    
    console.log(findEle1);