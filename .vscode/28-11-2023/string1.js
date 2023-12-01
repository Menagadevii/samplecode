console.log("string methods and search");
let str1="hello world"
let str2="menagadevi"
let numv=10
let yx=new String("kan")
console.log(yx);
console.log(yx.length);
console.log(str1.charAt(2));
console.log(str1.charCodeAt(4));
console.log(str1.codePointAt(3));
console.log(str1.concat(str2));
console.log(str1.endsWith("world"));
console.log(str1.startsWith("mmo"));
console.log(str1.includes("hello"));
console.log(str1.indexOf("hello"));
console.log(str1.match("menaga"));
console.log(str1.matchAll("menaga"));
console.log(str1.localeCompare());
console.log(str1.normalize());
console.log(str1.padStart(30,"*"));
console.log(str1.padEnd(30,"&"));
console.log(str1.repeat(4));
console.log(str2.replace("devi","kan"));
console.log(str1.search("world"));
console.log(str1.slice(6,11));
console.log(str1.split("+"));
console.log(str1.substring(6,10));
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.valueOf());

//method chaining
let v="menaga"
//  let str1="hello world"
// let str2="menagadevi"
let v1=v.charAt(5).concat(str1,str2)
console.log(v1);

//if
var age = 20; 
if( age > 18 )
{
 document.write("Qualifies for driving","<br>"); 
 
}
document.write("<hr>")

//if else
var weight = 11; 
if( weight > 18 )
{
 document.write("Qualifies for driving","<br>"); 
}
else
{ 
document.write("Does not qualify for driving","<br>"); 

} 
document.write("<hr>")

//else if
var book = "economics";
 if( book == "history" )
{ 
document.write("History Book",); 
}
else if( book == "maths")
{ 
document.write("Maths Book"); 
}
else if( book == "economics")
{
 document.write("Economics Book","<br>");
 
 }
else
{ 
document.write("Unknown Book","<br>");
 }

//checked property
function myGeeks() {
    let g = document.getElementById("GFG").checked;
    document.getElementById("sudo").innerHTML = g;
} 
 
//switch
var grade='A'; 
document.write("Entering switch block<br/>"); 
switch (grade)
 { 
case 'A': 
document.write("Good job<br/>");
break; 
case 'B': 
document.write("Pretty good<br/>"); 
break; 
case 'C':
 document.write("Passed<br/>"); 
break; 
case 'D':
 document.write("Not so good<br/>"); 
break; 
case 'F': 
document.write("Failed<br/>");
 break;
 default:
 document.write("Unknown grade<br/>"); 
} 
document.write("Exiting switch block");

// strict equality operator
let a = 2, b=2, c=3;
let d = {name:"MENAGA"};
let e = {name:"MENAGA"};
let f = e;
  
console.log(a===b);
console.log(a===c);
console.log(d===e);
console.log(f===e);


//logical
let p = 20;
let q = 30;
console.log(p>q && p<=q)
console.log(p>q)
console.log(!(p>q))
console.log(p>q || p==q)

//while
var count = 0; 
document.write("Starting Loop ");
 while (count < 10)
{ 
document.write("Current Count : " + count + "<br/>"); 
count++; 
}
 document.write("Loop stopped!","<br>");







