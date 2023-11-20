let aa="my name is menaga"
let bb="my fav person ***"
let c=30
document.write(aa.length,"<br>")
document.write(aa.slice(11,17) ,"<br>")
document.write(aa.substring(13,17),"<br>")
document.write(aa.replace("menaga","devi"),"<br>")
let cc=aa.replace("menaga","devi","<br>")
document.write(`the string aa is: ${cc}`,"<br>")
document.write(bb.toUpperCase(),"<br>")
document.write(bb.toLowerCase(),"<br>")
document.write(aa.charCodeAt(2),"<br>")
document.write(aa.charCodeAt(7),"<br>")
document.write(aa.charCodeAt(9),"<br>")
document.write(aa.charAt(3),"<br>")
document.write(aa.charAt(12),"<br>")
document.write(aa.charAt(11),"<br>")

let colors=[45,56,67,78]
colors[5]=79;
document.write(colors);
document.write(colors[2]);
document.write(colors[1]);
document.write(colors[3]);
document.write(colors.length)

const cars = new Array("saab", "volvo" ,"BMW");
cars[3]="vvv"
cars.push("lemon")

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars);
let c1=cars[0]
console.log(c1);
let co=cars[cars.length-1];
console.log(co);

cars.pop()
console.log(cars);

cars.shift()
console.log(cars);

cars.unshift("MENAGA")
console.log(cars);

delete cars[1]
console.log(cars);

let total=cars.concat(colors)
console.log(total);


