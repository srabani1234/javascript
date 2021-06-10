var str = "APPLE, Bananaa, kiwih, Apple";
const st = str.slice(-4,-2);
//console.log(st);
// console.log(st.slice(90));
// console.log(str.substring(30));
// console.log(str.substring(-2,7));
// console.log(str.substring(-4));
// // console.log(str.substr(-3,7));
// // console.log(str.substr(70));
// console.log(str.substr(-4));
console.log(str.replace("KIWIH","App"));
const upper=[];
const flights = '_delayed_departure;fao93123;tx123455;11:25+_Arrival'
for (const flight of flights.split(";")){

    console.log(flight.split("_"));
upper.push(flight.replace("_","").replace(" ",""));
}
console.log(upper.join(' '));