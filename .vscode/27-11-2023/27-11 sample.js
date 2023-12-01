console.log("Arithmeticn expression");
let aa,bb,cc
aa=20;
bb=40;
cc=60;
let add=aa+bb+cc
console.log("the addition is:", add);
let sub=aa-bb-cc
console.log("the subraction is:",sub);
let mul=aa*bb*cc
console.log("the multipulication is:",mul);  
let div=aa/bb
console.log("the division is:",div);
let mod=aa%55
console.log("the modules is:",mod); 
let pow= aa**2
console.log("the power is:",pow);
let exp=aa+bb*cc-(aa%cc)
console.log("the expression is:",exp);

//user input
console.log("user input");
let name=window.prompt("my name is:")
console.log("my name is:",name);
let username;
document.getElementById("button").onclick=function(){
    username= document.getElementById("name").value;
    console.log("my name is",username);
    document.getElementById("label").innerHTML= "hello" + username 
}

// type conversion
console.log("type conversion");
console.log(Number("3.14"));
console.log(Number(Math.PI));
console.log(Number("  "));
console.log(Number(""));
console.log(Number("45 90"));
console.log(Number("menaga"));
console.log(Number(false));
console.log(Number(true));

console.log(String(false));
console.log(String(true));
console.log(false.toString());
console.log(true.toString());

m=new Date();
console.log(Number(m));
console.log(m.getTime());
console.log(String(Date()));
console.log(Date().toString());

// math Properties
let num=[5,66,77,88,10,27,8,7]
x=34567.987
console.log(Math.LN10);
console.log(Math.E);
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
//math methods
console.log(Math.abs("String"));
console.log(Math.abs(0));
console.log(Math.abs(x));
console.log(Math.abs(40));
console.log(Math.acos("String"));
console.log(Math.acos(null));
console.log(Math.asin(-1));
console.log(Math.asin(x));
console.log(Math.atan(-1));
console.log(Math.atan(.5));
console.log(Math.atan(30));
console.log(Math.atan2(90,15));
console.log(Math.atan2(0, -0));
console.log(Math.atan2(+Infinity, -Infinity));
console.log(Math.ceil(45.95));
console.log(Math.ceil(-45.95));
console.log(Math.cos(90));
console.log(Math.cos(2*Math.PI));
console.log(Math.exp(1));
console.log(Math.exp(.5));
console.log(Math.floor(10.3));
console.log(Math.floor(-2.2));
console.log(Math.log(10));
console.log(Math.log(-1));
console.log(Math.max(10, 20, -1, 100));
console.log(Math.max(-1, -3, -40));
console.log(Math.min(0, -1));
console.log(Math.min(10, 20, -1, 100));
console.log(Math.pow(7, 2));
console.log(Math.pow(8, 8));
console.log(Math.random( ));
console.log(Math.round( 20.7 ));
console.log(Math.round( -20.3 ));
console.log(Math.sin( Math.PI/2 ));
console.log(Math.sin( 0.5 ));
console.log(Math.sqrt( 81 ));
console.log(Math.sqrt( -4 ));
console.log(Math.tan( Math.PI/180 ));
console.log(Math.tan( 90 ));
var Math= Math.toSource
console.log( Math);

// Hypotenuse calculator
 let a;
 let b;
 let c;

 a=window.prompt("Enther side A");
 Number(a);
 b=window.prompt("Enther side b");
 Number(b);
 c=Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
 console.log("side c",c);
 
 document.getElementById("submitButton").onclick=function(){
    a=document.getElementById("aTextBox").value;
    a=Number(a);

    b=document.getElementById("bTextBox").value;
    b=Number(b);

    c=Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    document.getElementById("clabel").innerHTML="side c:" +c;
 }

//counter
let count=0;
document.getElementById("decreasebtn").onclick=function(){
    count-=1;
document.getElementById("countlabel").innerHTML=count;

}
document.getElementById("resetbtn").onclick=function(){
    count=0;
document.getElementById("countlabel").innerHTML=count;

    
}
document.getElementById("increasebtn").onclick=function(){
    count+=1;
document.getElementById("countlabel").innerHTML=count;

}

//random
let=[22,33,44,55,66]
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

