"use strict";

function Hello() {
  document.write("Haii");
}

function over() {
  document.write("Mouse Over");
}

function out() {
  document.write("Mouse Out");
} //ARRAY


var colors = [45, 56, 67, 78];
colors[5] = 79;
console.log(colors);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);
console.log(colors.lengt);
var cars = new Array("saab", "volvo", "BMW");
cars[3] = "vvv";
cars.push("lemon");
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars);
var c1 = cars[0];
console.log(c1);
var co = cars[cars.length - 1];
console.log(co);
cars.pop();
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("MENAGA");
console.log(cars);
delete cars[1];
console.log(cars);
var total = cars.concat(colors);
console.log(total);