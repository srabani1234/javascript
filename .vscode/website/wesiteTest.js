console.log("hhh");
let a=window.document;
// give tag used in html file
a=document.all;
// give html body tag detail wheter this js file attached
//a=document.body;
// forms detaild
//a=document.forms;
// create html element array and get element from there one by one
 Array.from(a).forEach((element)=>{
 //console.log(element);
 });
//console.log(a);

// find links from page

b=document.links;

Array.from(b).forEach((ele)=>{
 //console.log(ele);
    if(ele.href.indexOf("google")!=-1){
    console.log(ele)
    }
}

)

