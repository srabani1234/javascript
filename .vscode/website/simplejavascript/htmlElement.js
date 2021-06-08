console.log("ff");
var ele = document.getElementById("myfirst");
// all the property color shoud red under this tag
//ele.style.color="Red"

//print all child node
elw=ele.childNodes;
//print all parent node of this element
elw=ele.parentNode;

//The innerText property sets or returns the text content of the specified node.
//elw = ele.innerText="thies f"
// elw = document.querySelector('#myfirst');
// elw =document.querySelector(".child");
// elw =document.querySelector("ul");
// console.log(elw);

elem = document.getElementsByClassName("container");

Array.from(elem).forEach((element) => {
   element.style.color="green";
   console.log(element.tagName)


    
});