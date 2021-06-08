// var d = new Date();
// console.log(d.getHours());

// const tomorrow = new Date()

// // add 1 day to today
// tomorrow.setDate(new Date().getDate() + 2)

// console.log(tomorrow.toLocaleString())  


const today = new Date()
const yesterday = new Date(today)

yesterday.setDate(yesterday.getDate() - 2)

console.log(today.toDateString())
console.log(yesterday.toDateString())
console.log(today.toLocaleString());
console.log(yesterday.toLocaleString())