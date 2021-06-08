const arr = ['jan','march','april','june','july'];

const indexNum = arr.indexOf('march');
let updateMonth;

if(indexNum!=-1){

    updateMonth = arr.splice(indexNum,1,'March');

}
console.log(arr);
console.log(updateMonth);