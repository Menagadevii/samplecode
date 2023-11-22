console.log("variable")
var a=18
var b=27
var c=a+b
function add(){
    console.log("the addition is: + ",c)
}
 console.log(add()) 
 {
    let v="menaga"
    let m="devi"
    let k=v+m
    console.log(k);
 }  
//console.log(k);

m=8
console.log(m);
var m
//let m

console.log("data types");
let no=45;//integer
let nama="menaga";//string
let isupper=false;//boolean
let car=null;//null
//car="red";
let num=undefined;//undefined
let vv=567e6
let mmm=5678e-3
let x=BigInt(123456890083211234556)
console.log(no,nama,isupper,car,vv,mmm,x);
console.log(typeof no);
console.log(typeof name);
console.log(typeof isupper);
console.log(typeof car);
console.log(typeof vv);
console.log(typeof mmm);
console.log(typeof x);
const sym = Symbol('uniqueSymbol');
console.log(typeof sym);
//object
let details={
    person:"menaga",
    age:20,
    gender:"male",
    address:"4/74 vettukadu,vennandur,namakkal(637505)",
    siblings:{
        bro:"anna",
        sis:"thangachi"
    }
}
//dot notation
console.log(details.person);
details.age=23;
console.log(details.age);
console.log(details.gender);
console.log(details.address);
console.log(details.siblings);
console.log(details.siblings.bro);
//Brocket notation
console.log(details['age']);
//array
let colors=[45,56,67,78]
colors[5]=79;
console.log(colors);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);
console.log(colors.length)

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
console.log(str1.replace("devi","kan"));
console.log(str1.search("world"));
console.log(str1.slice(6,11));
console.log(str1.split("+"));
console.log(str1.substring(6,10));
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.valueOf());

console.log("operators");
var a=2
var b= 4
var c= a+b
{
    document.write(c);
}
document.write("<hr>")
var g=20
var z= 40
var j= g+z
{

    console.log(j);
}

var o= "menaga"
var l="devi"
var t= o+l
window.alert(t)

let v,mv,k
v=33
mv=44
k=v+mv
console.log(" the sum is: "+k ,"<br>")

let xv = 10;
let y = 5;
console.log(xv + y)

let h = 10;
let s = 5;
console.log(h == s); 
console.log(h!= s);

let p = 20;
let q = 30;
console.log(p<q && p>=q);

let num2 = 10;
num1 = num2 + 5
 num3 = num2 - 3
 console.log(num1,num3)

let d=40
let xx=30
let n=d<xx?d:xx
console.log(n)

let w="menu"
let r="kan"
let tt=w+ "" +r
console.log(tt)

let aa=22
let vvm="menaga"
let mm=false
console.log(typeof aa)
console.log(typeof vv)
console.log(typeof mm)

let zz=33
let yy=66
console.log(zz|yy)
console.log(zz++);
console.log(zz)

console.log("template literals");
let text=`frds`
let text1=`buddies name
hari
    mani
         shuruthi`
console.log(text);
console.log(text1);

