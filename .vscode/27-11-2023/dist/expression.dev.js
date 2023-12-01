"use strict";

console.log("Arithmeticn expression");
var a, b, c;
a = 20;
b = 40;
c = 60;
var add = a + b + c;
console.log("the addition is:", add);
var sub = a - b - c;
console.log("the subraction is:", sub);
var mul = a * b * c;
console.log("the multipulication is:", mul);
var div = a / b;
console.log("the division is:", div);
var mod = a % 55;
console.log("the modules is:", mod);
var pow = Math.pow(a, 2);
console.log("the power is:", pow);
var exp = a + b * c - a % c;
console.log("the expression is:", exp); //user input

console.log("user input");
var name = window.prompt("my name is:");
console.log("my name is:", name);
var username;

document.getElementById("button").onclick = function () {
  username = document.getElementById("name").value;
  console.log("my name is", username);
  document.getElementById("label").innerHTML = "hello" + username;
};