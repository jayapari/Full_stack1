console.log('Lets start !')

const rectangle = {
    length:1,
    breadth:2,

    draw: function() { //method--> when fuction call inside object is called method
      console.log('drawing rect');
    }
};
//{} object literal
// in browser console run rectangle.draw and then check rectangle.draw() and see output


//factory function - create obj and return
function createRectangle(len, b){

    return rectangle1 = {
        length:len,
        breadth:b,
    
        draw: function() { //method--> when fuction call inside object is called method
          console.log('drawing rect');
        }
    };
} 
let rectangleObj1 = createRectangle(5,4);


//camel case --> example( noOfStudents)
//Constructor function -->Pascal notation (first letter of every word is capital)
//constructor function initialize properties and define method
function Rectangle(len, bre){
    
    //this refer current object
     this.length=len;
     this.breadth=bre;
     this.draw= function(){
        console.log("constructor function example " + this.length);
     }
}

//object creation using constructor func
//new is used to create empty object
let rectObj= new Rectangle(7,8);


//Dynamic Nature of objects --> addition and removal of obj is possible
rectObj.color='yellow'; //add property
console.log(rectObj);

delete rectObj.color;
console.log(rectObj);
//run rectObj.constructor on browsor console
//function is obj --> every obj is consructor

//when we run Rectangle2.constructor in browser console it works like this

let Rectangle2= new Function(
    'length', 'breadth',
    `this.length=length;
    this.breadth=breadth;
    this.draw=function(){
        console.log('drawing.....');
    }`
);


//functions are objects
//when we put dot with function it show so many objects
console.log(Rectangle2.prototype);



//types of JS
//primitive-- num, string, boolean, undefine, null
//reference type/objects-- object, array, functions


let a={value:10};
let b=a;
a.value++;  //address is pass -->its reference type in which we deal with original value
console.log(a);
console.log(b);

let a1=10;
let b1=a1;
a1++;  //value is pass -->primitime type in which we deal with copy of variable
console.log(a1);
console.log(b1);

//primitives are copied by their value and references are copied by their address


let d=10;
function inc(d){
    d++;
    console.log("inside d "+d);
}
inc(d);
console.log("d "+d); //copy of d is used becoz primitive


let e={value :10};
function dec(e)
{
    e.value--;
}
dec(e);
console.log("e "+e);
console.log("e "+e.value);



let squ={
   len:2,
   bre:4
};
//for in-loop --> for objects
for(let key in squ)
{
    //eys are refleced through key variable
    //values are reflected through squ[key]
    console.log(key);
    console.log(key,squ[key]);
}



//For-of loop --> only applied on iterables (arrays/maps)

for(let key of Object.keys(squ)){ //for-of for normal objects then we use Object.keys() or Object.entries()
    console.log(key);
}



if('color' in squ)
{
    console.log("Present  ");
}
else{
    console.log("Absent  ");
}


//Object Cloning

//iteration clone
// let src={value:10};
let src={
    j:1,
    g:2
};
let des={};
for(let key in src)
{
    des[key] =src[key];
}
console.log(des);

src.j++;
console.log(des);

//assign clone
let src2={value:25};
// let des1= Object.assign({},src);
let des1= Object.assign({}, src, src2);
console.log(des1);

//spread clone
let des2= {...src};
console.log(des2);



//Garbage Collection
//it automatically deallocate memory from var/const
//we dont have control over this......becoz it run in background


