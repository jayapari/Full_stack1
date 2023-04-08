console.log("good morning.....");

// we can run this JS
//     1. in terminal --> node indexedDB.js
//     2. or in browser inspect we can see console


//dynamic typing
let lastname="Sudha";
console.log(lastname);

lastname=17;
console.log(lastname);
//reference type
 let names=['js','dje','bjk'];
 console.log(names[3]);

 let a1=2;
 let b1=2;
 let c= a1**b1;
 console.log("exponential "+c);

 console.log(a1 === b1);//strict equality(data anad value both are same)
 
 // '==' lose equality(only data should be equal)
 let g=1;
 let f='1';
 console.log("lose equality " +g==f);

 console.log("strict equality " +g===f);

 let age=17;
 let stats = (age >= 18)? 'yes vote' : 'no vote';
 console.log(stats);

 //with non-booleans
 console.log(true || false);
 console.log(false || 'jays'); // jays is truthy value
 console.log(true || 3||2);
 console.log(false||5 ||2);//afer getting first truty value '5' we will not move forward

//falsy value are undefined , nule, false,'', NaN(not a number)

//control statements
let marks=88;
if(marks >=90)
{
    console.log('A grade');
}
else if(marks >=80)
{
    console.log('B grade');
}
else
{
    console.log('D grade');
}

//switch case
let num=2;
switch(num)
{
    case 1 : console.log('A');
    break;
    case 2: console.log('B');
    break;
    default: console.log('D');

}