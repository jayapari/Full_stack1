//Math object
 let a=Math.random();
 console.log(a);
 Math.round(3.2222);
 //mdn javascript

 function difference(a, b) {
    return Math.abs(a - b);
  }
  console.log(difference(3, 5));
  // Expected output: 2
  console.log(difference(5, 3));
  // Expected output: 2
  console.log(difference(1.23456, 7.89012));



  //String
  let lastName='Parida';
  //typeof lastName is object
  let firstName=new String('Jayshree');
   //typeof firstName is string object

   // when we use dot with lastname it treat as string Object

   let ans=lastName.includes("Pa");
   console.log(ans);
   lastName.endsWith("da");
   lastName.indexOf("i");
   lastName.toUpperCase();
   lastName.trim();//remove space 
   lastName.replace("rida","rrida");
   
   let message="This is my first message";
   let words=message.split(' ');
   console.log(words);


   //Template literals --->back ticks
   let msg=`This is
    my 
    second message --> ${firstName}`;
    console.log(msg);//output is same as editor

   //Escape notation or sequences

   //Date and Time
   let date = new Date('July 17 2023 5:00');
   let date1= new Date();
   let date2= new Date(2023,6, 17,5);
   console.log(date);

   date.setFullYear(2022);
   console.log(date);
   date.getFullYear();


   //Arrays -->type of object
   //in js we can stoe different type of items in c++/java we save same type of items
   let num=[1,'a',3,5];
   console.log(num);

   //insertion
   num.push(9); //at end
   num.unshift(4);//at start
   num.splice(1,0,'b','c');//splice(start_index,no. to be delete,no. to be insert)
  //splice for middle
   console.log(num);

   //searching
   console.log(num.indexOf(5));
   //if no. is not present then it will print -1

   console.log(num.includes(3));
   console.log(num.indexOf(4,2));


//object/Reference type
   let courses=[
      {no:1, naam:'Jays'},
      {no:2, naam:'Sud'}
   ];
   console.log(courses);


//for above type of arrays we have different objects we cannot access this using includes and indexOf
//for this we use callback function
let course=courses.find(function(course){
    return course.naam ==='Sud';
})
console.log(course);

//short form of previous find function
//remove 'function' and include =>
//single parameter then remove parameter
//single line of code then remove return
let course1=courses.find(course1 => course1.naam ==='Sud'
);
console.log(course1);
//callback function is a function that is pass inside a function


//Removing element
num.pop(); //for end
num.shift(); //for begning
num.splice(3,1);//for mid -->splice(index of num,no. of element to be deleted)


//Emptying an Array
//num3.length=0;
let num3=[4,8,9,6]
let num2=num3;
// num3.length=0;
num3.splice(0,num3.length);
console.log(num2);
console.log(num3);


//Comibining & Slicing Arrays
let n1=[1,2,3];
let n2=[6,7,8];
console.log(n1.concat(n2));
let n3=n1.concat(n2);

console.log(n3.slice(1,4));
console.log(n3.slice(1));//from 1 index to end
console.log(n3.slice());//full slicing-->print complete array

//Spread operator
let f=[8,9];
let s=[3,4];
// let combine=[...f, ...s];
let combine=[...f,'a', ...s,'c'];
console.log(combine);
//can also be use for copying
let fc=[...f];


//Iteration in array
let arr=[10,20,30,40];
//for-of loop
for(let value of arr)
{
   console.log(value);
}

//for-each loop
arr.forEach(function(n)
{
   console.log(n);
})

arr.forEach(n=>console.log(n));


//Joining Arrays
let num4=[8,9,4,3,2];
const joined=num4.join(',');
console.log(joined);
//insead of printing different line it print in single line

//split
const splts=joined.split(',');
console.log(splts);


//Sorting Arrays
let unsort=[9,5,8,0];
console.log(unsort.sort()); //for primitive
console.log(unsort.reverse());

//sorting for objects --> try wit predicate function

//Filtering arrays
let mixnum=[-34,5,89,-2];
let filternum = mixnum.filter(function(value){
   return value>=0;
});
console.log(filternum);


//Mapping Arrays
//map each element of array with some element
let mapnum = [7,8,2,3];
 let items= mapnum.map(function(value){
   return 'student_no ' + value;
});
console.log(items);


//Mapping with objects
let items1= filternum.map(nm=> {value:nm});
console.log(items1);


//Chaining
let numbers=[1,2,-6,-9];
let items2= numbers
   .filter(value => value>=0)
   .map(num => {value:num});
console.log(items2);


      


