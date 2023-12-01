//do while
let ii=1
let t=5
do{
    document.write(ii+"*"+t+"="+ii*t,"<br>");
    ii++;
}
while(ii<=10)

//for
for(count = 1; count < 9; count++)
{ 
document.write("Current Count : " + count );
 document.write("<br/>");
 } 

 //break
 let content=" "
 let i
 for (i = 1; i < 100; i++) {
    if (i === 10) {
        break;
    }
    content += "menaga" + i + "<br>"
}
document.write(content);

//continue
let contents =" "
let j
for(j=1; j<10; j++){
    if(j===7)
    {
        
        continue;
    }
    contents += "menukan" + j + "<br>"
}
document.write(contents);

//nested loop
for (counter = 1; counter < 4; counter++) { 
    // count from 1 to 3 three times
    console.log("Count from 1 to 4");
    for (counterTwo = 1; counterTwo < 5; counterTwo++){
        console.log(counterTwo);
    }
}

//function return

function myFunction(g1, g2) {
    return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);
//function
function mine(){
    let nane="menaga";
    let age=54
    document.write("name is "+typeof name +"<br>")
    document.write("name is "+typeof age +"<br>" )
    console.log("welcome to my world  "+ nane +"  hii");
    alert("menaga");
}
mine()

//var
var name="menaga"
console.log("my name is, " + name +"menaga");
//let
let names="menagadevi"
console.log("my name is, " + names +"menaga");
//literals
console.log("template literals");
let text=`frds`
let text1=`buddies name
hari
    mani
         shuruthi`
console.log(text);
console.log(text1);

//format currency
//Using toLocaleString() method
const amount = 1234.56;
const formattedAmount = amount.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'

});
const formattedAmounts = amount.toLocaleString('de-DE', {
    style: 'currency',
    currency:'UDS'
});
  
console.log(formattedAmount); // Output: $1,234.56
console.log(formattedAmounts);
