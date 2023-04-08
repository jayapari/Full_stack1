function eventFunction(){
    console.log("I have clicked");
    // document.style.color ='green';
}

document.addEventListener("click",eventFunction);

// document.addEventListener("click",function(){document.style.backgroundColor='green';});

// document.removeEventListener("click",eventFunction);


const content = document.querySelector("#wrapper");
content.addEventListener('click', function(event){
    console.log(event);
});

let links=document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log("maja aaya");
});


function paraStatus(event){
    console.log("I have clicked on para" +event.target.textContent);
    //to get para no. on console
}

let myDiv = document.createElement('div');
for(let i=1;i<=10;i++){
    let newElement= document.createElement('p');
    newElement.textContent='This is para '+i;
    newElement.addEventListener('click',paraStatus);

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);


//event phase--> it will select both span and para when we click on para
// let ele= document.querySelector('#wrapper');
// ele.addEventListener('click',function(event){
//     console.log("clicked on span ..." +event.target.textContent);
// });

let ele= document.querySelector('#wrapper');
ele.addEventListener('click',function(event){
    
    if(event.target.nodeName==='SPAN'){
        console.log("clicked on span ..." +event.target.textContent);
    }
});// it will select will not display when we click on para and display only when we click on span


//DOM content loaded --> to know that hhtml is loaded
