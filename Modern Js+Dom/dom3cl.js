//adding 10 para
const t1=performance.now();
for(let i=0;i<10;i++)
{
    let newEle= document.createElement('p');
    newEle.textContent = 'This is para '+i;

    document.body.appendChild(newEle);
}
const t2=performance.now();
console.log("This took  "+(t2-t1)+" ms");


//optimizing a bit
const t3=performance.now();

let myDiv = document.createElement('div');
for(let i=0;i<10;i++)
{
    let newEle1= document.createElement('p');
    newEle1.textContent = 'This is para '+i;
    myDiv.appendChild(newEle1);
}
document.body.appendChild(myDiv ); 
const t4=performance.now();
console.log("This took  "+(t4-t3)+" ms");


//Document fragment
 let fragment= document.createDocumentFragment();
for(let i=0;i<10;i++)
{
    let newEle= document.createElement('p');
    newEle.textContent = 'This is para '+i;

    fragment.appendChild(newEle);
}
document.body.appendChild(fragment); //1reflow and 1 repaint


//call stack
function addPara()
{
    let para= document.createElement('p');
    para.textContent="Js is single ";
    document.body.appendChild(para);
}

function appendNewMessage()
{
    let para= document.createElement('p');
    para.textContent="Hello dear  ";
    document.body.appendChild(para);
}
//synchronous type -->line by line
addPara();
appendNewMessage();

//call stack
//event loop --> has 3 parts call stack, browser, event queue
 
//setTimeOut()
setTimeout(function(){
    console.log("Helooooooo")
},6000);

//setTimeout exception case
setTimeout(function(){
    console.log("Helooooooo zero")
},0);//whenevr u are trying to defer something untill stack is empty

