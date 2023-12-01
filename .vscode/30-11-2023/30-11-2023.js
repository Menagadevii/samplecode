// Generate a Random Number
const answer= Math.floor(Math.random() * 10 + 1);
 
// Counting the number of guesses
// made for correct Guess
let guesses = 0;

document.getElementById("submitButton").onclick=function(){

    // Number guessed by user    
    let guess = document.getElementById("guessField").value
    guesses+=1;

    if(guess == answer){
        alert(`${answer}is the #. It took you ${guesses} guesses`);
    }

    /* If guessed number is greater than actual number*/
    else if(guess  < answer){
        
        alert("Too small!");
    }
    else{
        
        alert("Too large!");
}
}
//array
let colors=[45,56,67,78]
colors[5]=79;
console.log(colors);
console.log(colors[2]);
console.log(colors[1]);
console.log(colors[3]);

//sort array string
//Original string
let string = ['menaga', 'kanmani', 'hari', 'malar', 'shuru']
 
// Print original string array
console.log('Original String')
console.log(string)
 
// Use sort() method to sort the strings
string.sort()
 
console.log('After sorting')
 
// Print sorted string array
console.log(string)
//loop use
function string_sort (str) {
    let i = 0,
        j
    while (i < str.length) {
        j = i + 1
        while (j < str.length) {
        if (str[j] < str[i]) {
            let temp = str[i]
            str[i] = str[j]
            str[j] = temp
        }
        j++
        }
        i++
    }
    }
    let strings = ['mani', 'reshma', 'hari', 'devi', 'shurui']
    console.log('Original String')
    console.log(strings)
    string_sort(strings)
    console.log('After sorting')
    console.log(strings)
    
//2d array
let xx = [];
let yy = 3;
let zz = 3;
let aa = 0

// Loop to initialize 2D array elements.
for (let i = 0; i < yy; i++) {
	xx[i] = [];
	for (let j = 0; j < zz; j++) {
		xx[i][j] = aa++;
	}
    
}
console.log(xx);

//literal
let MathScore = [
    ["Bar", 20, 60, "A"],
    ["Foo", 10, 52, "B"],
    ["Joey", 5, 24, "F"],
    ["John", 28, 43, "A"],
    ["Liza", 16, 51, "B"]
];
console.log(MathScore);

//form
const rows = 3;
const columns = 4;
const matrix = Array.from({ length: rows }, () => 
               new Array(columns).fill(0));
console.log(matrix);

//spread operator
let arr= ['aa','bb','cc']
let arr1=['vv','mm']
let arr2=[...arr,...arr1]
console.log(arr2);

// //rest
	// es6 rest parameter
	function fun(...input){
		let sum = 0;
		for(let i of input){
			sum+=i;
		}
		return sum;
	}
	console.log(fun(1,2)); 
	console.log(fun(1,2,3)); 
	console.log(fun(1,2,3,4,5)); 			 

//callbacks
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  // Passing a function (sayGoodbye) as a callback
  greet('Alice', sayGoodbye);
  
//foreach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (element)
 {
  console.log(element);
});

numbers.forEach(element => {
  console.log(element);
});

//loop through array
let myArray = [1, 'two', 3, 'four', true];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

let index = 0;
let array = [1, 2, 3, 4, 5, 6];
 
while (index < array.length) {
    console.log(array[index]);
    index++;

}


let x = 0;
let arrays = [1, 2, 3, 4, 5, 6];
 
const under_five = x => x < 5;
 
if (arrays.every(under_five)) {
    console.log('All are less than 5');
}
else {
    console.log('At least one element is not less than 5');
}

  //temperature
    function convertToCelsius() {
      const celsiusInput = document.getElementById("celsiusInput").value;
      const result = (celsiusInput * 9/5) + 32;
      document.getElementById("resultCelsius").innerText = `${celsiusInput} Celsius = ${result} Fahrenheit`;
    }

    function convertToFahrenheit() {
      const fahrenheitInput = document.getElementById("fahrenheitInput").value;
      const result = (fahrenheitInput - 32) * 5/9;
      document.getElementById("resultFahrenheit").innerText = `${fahrenheitInput} Fahrenheit = ${result} Celsius`;
    }
let myArrays=[1,2,3,45,6]
    let newArray = myArrays.map(function(element) {
      return element * 2;
     });
     
     console.log(newArray);
     











