"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log("variable");
var a = 18;
var b = 27;
var c = a + b;

function add() {
  console.log("the addition is: + ", c);
}

console.log(add());
{
  var _v = "menaga";
  var _m = "devi";

  var _k = _v + _m;

  console.log(_k);
} //console.log(k);

m = 8;
console.log(m);
var m; //let m

console.log("data types");
var no = 45; //integer

var nama = "menaga"; //string

var isupper = false; //boolean

var car = null; //null
//car="red";

var num = undefined; //undefined

var vv = 567e6;
var mmm = 5678e-3;
var x = BigInt(123456890083211234556);
console.log(no, nama, isupper, car, vv, mmm, x);
console.log(_typeof(no));
console.log(typeof name === "undefined" ? "undefined" : _typeof(name));
console.log(_typeof(isupper));
console.log(_typeof(car));
console.log(_typeof(vv));
console.log(_typeof(mmm));
console.log(_typeof(x));
var sym = Symbol('uniqueSymbol');
console.log(_typeof(sym)); //object

var details = {
  person: "menaga",
  age: 20,
  gender: "male",
  address: "4/74 vettukadu,vennandur,namakkal(637505)",
  siblings: {
    bro: "anna",
    sis: "thangachi"
  }
}; //dot notation

console.log(details.person);
details.age = 23;
console.log(details.age);
console.log(details.gender);
console.log(details.address);
console.log(details.siblings);
console.log(details.siblings.bro); //Brocket notation

console.log(details['age']); //array

var colors = [45, 56, 67, 78];
colors[5] = 79;
console.log(colors);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);
console.log(colors.length);
console.log("string methods and search");
var str1 = "hello world";
var str2 = "menagadevi";
var numv = 10;
var yx = new String("kan");
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
console.log(str1.padStart(30, "*"));
console.log(str1.padEnd(30, "&"));
console.log(str1.repeat(4));
console.log(str1.replace("devi", "kan"));
console.log(str1.search("world"));
console.log(str1.slice(6, 11));
console.log(str1.split("+"));
console.log(str1.substring(6, 10));
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.valueOf());
console.log("operators");
var a = 2;
var b = 4;
var c = a + b;
{
  document.write(c);
}
document.write("<hr>");
var g = 20;
var z = 40;
var j = g + z;
{
  console.log(j);
}
var o = "menaga";
var l = "devi";
var t = o + l;
window.alert(t);
var v, mv, k;
v = 33;
mv = 44;
k = v + mv;
console.log(" the sum is: " + k, "<br>");
var xv = 10;
var y = 5;
console.log(xv + y);
var h = 10;
var s = 5;
console.log(h == s);
console.log(h != s);
var p = 20;
var q = 30;
console.log(p < q && p >= q);
var num2 = 10;
num1 = num2 + 5;
num3 = num2 - 3;
console.log(num1, num3);
var d = 40;
var xx = 30;
var n = d < xx ? d : xx;
console.log(n);
var w = "menu";
var r = "kan";
var tt = w + "" + r;
console.log(tt);
var aa = 22;
var vvm = "menaga";
var mm = false;
console.log(_typeof(aa));
console.log(_typeof(vv));
console.log(_typeof(mm));
var zz = 33;
var yy = 66;
console.log(zz | yy);
console.log(zz++);
console.log(zz);
console.log("template literals");
var text = "frds";
var text1 = "buddies name\nhari\n    mani\n         shuruthi";
console.log(text);
console.log(text1);