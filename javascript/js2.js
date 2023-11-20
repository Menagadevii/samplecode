var age = 20; 
if( age > 18 )
{
 document.write("Qualifies for driving","<br>"); 
 
}
document.write("<hr>")
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
document.write("Unknown Book");
 }
 document.write("<hr>")
 var grade='C'; 
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
     break; 
 } 
 document.write("number","<br>");
 document.write("<hr>")

 var count; document.write("Starting Loop" + "<br/>"); 
for(count = 0; count < 10; count++)
{ 
document.write("Current Count : " + count );
 document.write("<br/>");
 }
 document.write("<hr>")
 
 var count = 1; 
document.write("Starting Loop ","<br>");
 while (count < 10)
{ 
document.write("Current Count : " + count +"<br/>");
count++; 
}
 document.write("Loop stopped!","<br>");
 document.write("<hr>")
 
 var count = 0; 
 document.write("Starting Loop" + "<br/>"); 
 do
 { 
 document.write("Current Count : " + count + "<br/>"); 
 count++;
  }
  while (count < 5); 
document.write ("Loop stopped!")
document.write("<hr>")


  


 
