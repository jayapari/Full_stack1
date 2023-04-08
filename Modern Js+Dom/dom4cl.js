
setTimeout(function(){
    console.log("Jayshree here 3..");
},3000);

function sync(){
    console.log("Jayshree here 1..");
}
sync();
console.log("Jayshree here 2..");

  
//Promise
let mePromise = new Promise(function(resolve,reject){
    console.log("I'm inside promise");
    
    setTimeout(function(){
       console.log("inside timeout"); 
    },5000);
    //return 2;
   //resolve(195);
   reject(new Error('Error has occurred...'))
});
// mePromise.then((value) => {console.log(value);});  //for resolve case
mePromise.then((value) => {console.log(value)}, (error)=>{console.log("received an error..")}); //for both error and resolve case
console.log("promise1...."); //for resolve case

mePromise.catch((error) => {console.log("received an error.."); }); //for error case



let mePromise1 = new Promise(function(resolve,reject){
    console.log("I'm inside promise");
    
    setTimeout(function(){
       console.log("inside timeout"); 
    },3000);
   resolve(1997);
   //reject(new Error('Error has occurred...'))
})
console.log("Promise2....");


//one promise depend on another promise
let wada1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('setTimeout started ---wada1');
    },2000); 
    resolve(true);
})

wada1.then(() => {
    let wada2= new Promise(function(resolve,reject){
       
        setTimeout(()=>{
            console.log('setTimeout started ---wada2');
        },3000);

        resolve("wada 2 resolved");
    })
    return wada2;
}).then((value)=> console.log(value));


//Promise chaining -->async await(special syntax) used to work with promise

//to change any function to aysnc just writw async before that
async function abcd(){
       return 7;
} 
//to check that this async function is promise --> writw abcd() in console of browser
async function utility()
{
    let cg= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("cg has hot weather"); 
        },2000);
    });

    let odisha= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("odisha has moderate weather"); 
        },3000);
    });
    
  let ch= cg;
  let od= await odisha;
  return (ch,od);    
}

//Fetch API
 
 async function utility1() //get API
 {
    let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let op = await content.json();
    console.log(op);
 }
utility1();
//syntax of fetch('url',[options]);

//POST
async function helper(){

    let option1={
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };

     let conPost= await fetch('https://jsonplaceholder.typicode.com/posts', option1);
     let resPost= conPost.json();
     return resPost;   
}

async function utility4()
{
    let ans=helper();
    console.log(ans);
    console.log("done");
}
utility4();



//Closures()

let name="jay"; 
function init() {
    let name = "Mozilla"; // name is a local variable created by init
    //let -->block space
    function displayName() {
        let name="sud";
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  //different type
  function solve()
  {
    let abs=6;
    function innerSolve()
    {
        console.log(abs);
    }
    return innerSolve;
  }
  let extName= solve();
  extName();  //ans should be undefined but it is 6


  function outer()
  {
    let a=5;
    inner1()
    {
        let a=3;
        console.log(a);
        inner2()
        {
            let a=7;
            console.log(a);

            inner3()
            {
                console.log(a);
            }
        }
    }
  }




