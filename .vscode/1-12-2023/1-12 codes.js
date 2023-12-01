//array map
let myArray=[1,2,3,45,6]
let newArray = myArray.map(function(element) {
 return element * 2;
});

console.log(newArray); 

//filter
function canVote(age) {
    return age >= 18;
}
 
function func() {
    let filtered = [24, 33, 16, 40].filter(canVote);
    console.log(filtered);
}
func();

//reduce
let num=[22,33,44,567]
let reduce = num.reduce((previousValue, currentValue, currentIndexnumber, array)=>{
    return previousValue+currentValue
})
console.log(reduce);

//sort array
let number=[27,18,10,22,44]
let sort=number.sort()
console.log(number);

//fun exp
function callAdd(x, y) {
	let z = x + y;
	return z;
}
console.log("Addition : " + callAdd(7, 4));

//arrow
let calDiv = (x, y) => {
	let z = x / y;
	return z;
}

console.log("Division : " + calDiv(24, 4));

//Anonymous 
var greet = function () { 
    console.log("hai,hello world"); 
}; 

greet(); 

//sufflling
function shuffleArray(array) {
    let len = array.length,
        currentIndex;
    for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
        let randIndex = Math.floor(Math.random() * (currentIndex + 1) );
        var temp = array[currentIndex];
        array[currentIndex] = array[randIndex];
        array[randIndex] = temp;
    }
}
let a = [1,2,3,4,5];
console.log("Array before Shuffling", a);

console.log("Shuffling array");
shuffleArray(a);

console.log("Array after Shuffling", a);

//nested
let result;
      function add_two(a,b) {
         result = a+b;
      }
      function add_three(c) {
         add_two(2,5);
         result =result+c;
         return result;
      }
      let answer = add_three(8);
      console.log(answer);

// closures
function foo() {
	let b = 1;
	function inner() {
		return b;
	}
	return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());

//map
let aa= new Map();
aa.set("naa","menaga")
aa.set("nee","kan")
{
    console.log(aa);
}