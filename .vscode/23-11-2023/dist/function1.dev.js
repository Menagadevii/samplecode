"use strict";

function add(a, b) {
  return a + b;
}

add(10, 18);
document.write("the addition is:", add(10, 18));
document.write("<hr>");
var mul = new Function("aa", "bb", "return aa*bb");
var multipulacation = mul(4, 5);
console.log(multipulacation);