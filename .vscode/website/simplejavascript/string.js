//var str = " the men vinod thapa my men\n";
// console.log(str.length);
// console.log(str.indexOf("m"));
// console.log(str.indexOf("men",5)); 


// console.log(str.slice(str.indexOf(" ")));
// console.log(str.slice(str.lastIndexOf(" ")));
// console.log(str.search("men",6))
// console.log(str.search("i"));
// console.log(str.toLocaleLowerCase().trim());


// console.log(str.slice(-2,26));

// console.log(typeof(new String("jonas")));
// console.log(typeof(new String("jonas")).slice(1))
//console.log(str.replace("t","$").replace("h","#"));
//console.log(str.replace(/my/g,"door"));
// console.log(str.includes("my",-12));
// console.log(str.startsWith(" ",4))
// console.log(str.endsWith("\n"));

// const [firstname,lastname]='Janas stive'.split(' ');
// console.log(firstname);
// console.log(lastname);

// const newName = ['Mr.',firstname,lastname].join(" ")
// console.log(newName);

const upper=[];
const newStr = function(name){
    const names = name.split(' ');
    console.log(names);
   // console.log(...name);
    for (n of names){

      upper.push(n.replace(n[0],n[0].toUpperCase()));
    }
console.log(upper.join(' '));
}

newStr("this is string");


const upper1=[];
const newStr1 = function(nam){
console.log(nam.charAt(0).toUpperCase()+ nam.slice(1));
}

newStr1("this is string");
// padding
var st = 'This is men';
console.log(st.padStart(12,"+").padEnd(22,"+"));

const padFun = function(numbers){
     const str = numbers.toString(); // slice applicable for string onle
     console.log(str);
    const last = str.slice(-4);
    const pad = last.padStart(str.length,"+");
    return pad;
}
console.log(padFun(1345465667887));

//repeat string
const strr = "this is\n"
console.log(strr.repeat(2));