var str = "string test";
console.log(str.replace(" "));
var newStr = str.replace(" ");
console.log(newStr.split(""));
console.log(Date.now());

var d = new Date();
console.log(d.getHours());

const tomorrow = new Date()

// add 1 day to today
tomorrow.setDate(new Date().getDate() + 2)

console.log(tomorrow.toLocaleString())  


const today = new Date()
const yesterday = new Date(today)

yesterday.setDate(yesterday.getDate() - 1)

today.toDateString()
yesterday.toDateString()