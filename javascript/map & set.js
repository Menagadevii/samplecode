let mind=new Map([
    ["name","menaga"],
    ["age",22],
    ["no",50], 
    ["key","val"]])
    /*document.write(mind,"<br>")
    document.write(mind.get("name"),"<br>")
    document.write(mind.get("age"),"<br>")
    document.write(mind.get("no"),"<br>")
    document.write("<hr>")*/


    let lap=new Map();
    lap.set('num1',22);
    lap.set('num2',"menaga");
    lap.set('no3',"devi");
    lap.set('num3',55);
    document.write(lap.get("num1"),"<br>")
    document.write(lap.get("num2"),"<br>")
    document.write(lap.get("no3"),"<br>")
    document.write(lap.get("num3"),"<br>")
    document.write("<hr>")

    document.write(lap.has("num3"),"<br>")
    document.write(lap.has("num7"),"<br>") 
    document.write(lap.size,"<br>")
    document.write(mind.size,"<br>")
    document.write("<hr>")
   document.write(lap.delete("no3"),"<br>")
    document.write(lap.size,"<br>")
    let text=" " ;
    lap.forEach(function(value,key){
        text =+ key + ' = ' + value + "<br>"
    })
   document.write(text ,"<br> ")
    document.write(lap.size ,"<br>")
    document.write("<hr>")

    let tee ="";
    for(const x of lap.entries()){
        tee += x + "<br>"
    }

    document.write(tee,"<br>")
    document.write(lap.size)
    document.write("<hr>")

    document.write(lap.clear)
    document.write(lap.size)

   let numbers= new Set(['a','m','v','k'])
    document.write(numbers.size,"<br>")
    document.write(numbers.has('a'),"<br>")
    document.write(numbers.add('v'),"<br>")
    document.write(numbers.size,"<br>")
let txr= "" ;
numbers.forEach(function(value){
    txr += value;
})
document.write(txr,"<br>")
document.write(numbers.values())
let vm = " "
for(const y of numbers.values()){
    vm += y+ "<br>";
}
document.write(vm,"<br>")