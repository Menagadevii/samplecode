//anonymous
let AA="menaga"
let BB="devi";
(function(){
    console.log(`my first name is ${AA}.my last name is ${BB}`);
})
();

let me=function(){
    console.log(`my first name is ${AA}.my last name is ${BB}`);
}
me();

((menaga)=>{
    console.log(`this function is ${menaga}`);
})
("arrow function");

//error handling
try{
    num=prompt("enter a number")
    if(num===" ")
    throw "can't be empty"
if(isNaN(num))
throw "enter a vaild number"
console.log(num**3);
}
catch(e){
    console.log(e);
}

finally{
    console.log("finished");
}
//try catch
try {
    adddlert("Welcome guest!");
  }
  catch(err) {
    console.log("err.name");
  }
//Range Error
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
    console.log(err.name);
}
  
//Reference Error
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
    console.log(err.name);
}
//Syntax Error
try {
    eval("alert('Hello)");   // Missing ' will produce an error
  }
  catch(err) {
    console.log(err.name);
}
    
//Type Error
let num1 = 1;
try {
  num1.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
    console.log(err.name);
}
  
//URI (Uniform Resource Identifier) Error
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    console.log(err.name);
}

//settimeout
setTimeout(() => {
    console.log(`happy`);
}, 3000);

setTimeout(() => {
    console.log(`
    birth day`);
}, 4000);

let m=3,n=5;
let addition=setTimeout(add,3000,m,n) 
function add(){
    console.log(`${m} + ${n} = ${m+n}`);
}

setTimeout(() => {
  document.write(`happy`);
}, 5000);

setTimeout(() => {
  document.write(`
  birth day`);
}, 6000);

//interval

let int1=setInterval(()=>{
  document.write("hii","<br>"),2000})
setInterval(()=>console.log("hii"),2000)
let interval=setInterval(()=>console.log("hello"),3000)

clearTimeout(addition)
clearInterval(interval)
clearInterval(int1)

//Data obj
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days=["sunday","monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let d=new Date()
console.log(d);
//get method
console.log("year:" ,d.getFullYear());
console.log( "date:",d.getDate());
console.log("day:",days[d.getDay()]);
console.log("hours:",d.getHours());
console.log("milli seconds:",d.getMilliseconds());
console.log("minits:",d.getMinutes());
console.log("month:",months[d.getMonth()]);
console.log("seconds:",d.getSeconds());
console.log("time:",d.getTime());
console.log("TimezoneOffset:",d.getTimezoneOffset());
console.log("UTCDate:",d.getUTCDate());
console.log("UTCDay:",days[d.getUTCDay()]);
console.log("UTCFullYear:",d.getUTCFullYear());
console.log("UTCHours:",d.getUTCHours());
console.log("UTCMilliseconds:",d.getUTCMilliseconds());
console.log("UTCMinutes:",d.getUTCMinutes());
console.log("UTCMonth:",d.getUTCMonth());
console.log("UTCSeconds:",d.getUTCSeconds());
//display method
console.log("toDateString:",d.toDateString());
console.log("toISOString:",d.toISOString());
console.log("toLocaleDateString:",d.toLocaleDateString());
console.log("toJSON:",d.toJSON());
console.log("toLocaleString:",d.toLocaleString());
console.log("valueOf:",d.valueOf());
console.log("toUTCString:",d.toUTCString());
console.log("toTimeString:",d.toTimeString());
console.log("toString:",d.toString());
console.log("new Date(date string)");
let d1=new Date("October 13, 2014 11:13:00")
console.log(d1);
console.log("new Date(year, month, ...)");
console.log("5 numbers specify year, month, day, hour, and minute:");
let d3=new Date(2018, 11, 24, 10, 33, 30, 0)
console.log(d3);
let d4=new Date("2021-03-25")
console.log(d4.getFullYear);
let d5=new Date(2018, 11, 24, 10, 33)
console.log(d5);
let d6=new Date(2018, 11, 24, 10)
console.log(d6);
let d7=new Date(2018, 11, 24)
console.log(d7);
let d8=new Date(2018, 11)
console.log(d8);
console.log("One and two digit years will be interpreted as 19xx:");
let d9=new Date(99, 11, 24)
console.log(d9);
let d10=new Date(9, 11, 24)
console.log(d10);
console.log("new Date(milliseconds) creates a new date object as milliseconds plus zero time:");
let d11=new Date(100000000000)
console.log(d11);
let d12=new Date(86400000)
console.log(d12);
let d13=new Date(24 * 60 * 60 * 1000)
console.log(d13);

//console time
console.time("test1");
for (let i = 0; i < 100; i++) {
  console.log(i);
}
console.timeEnd("test1");

console.time("test1");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.timeEnd("test1");

//promise
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
console.log(myPromise);

// async
const getData = async () => {
	let data = "Hello World";
	return data;
}


getData().then(data => console.log(data));






    
    
