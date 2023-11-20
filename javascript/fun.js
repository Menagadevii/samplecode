function myFunction(a, b) {
    return a * b;
  }
  document.write("the multiplication is: ",mul(3,6),"<br>")
  document.write("<hr>")

  
  
  function none(nom,age){//parameter
  return("my name is, " + nom +"menaga. my age is "+age);
  }
  document.write(none("menaga",20));//arguments
  document.write(none("devi",22))
  document.write("<hr>")
  
  function add(n1,n2){
      return(n1+n2);
  }
  document.write("the addition is:",add(22,45),"<br>")
  document.write("the addition is:",add(333,66),"<br>")
  document.write("<hr>")
  
  
  function sub(n1,n2){
      return(n1-n2);
  }
  document.write("the subtraction is: ",sub(22,45),"<br>")
  document.write("the subtraction is: ",sub(333,66),"<br>")
  document.write("<hr>")
  
  function mul(n1,n2){
      return(n1*n2);
  }
  document.write("the multiplication is: ",mul(22,45),"<br>")
  document.write("the multiplication is: ",mul(333,66),"<br>")
  document.write("<hr>")
  
  function div(n1,n2){
      return n1/n2;
  }
  document.write("the divition is: ",div(22,45),"<br>")
  document.write("the divition is: ",div(333,66),"<br>")
  document.write("<hr>")
  
  function mol(n1,n2){
      return n1%n2;
  }
  document.write("the modules is: ",mol(22,45),"<br>")
  document.write("the modules is: ",mol(333,66),"<br>")
  document.write("<hr>")
  
  function mine(){
      let nane="menaga";
      let age=54
      document.write("name is "+typeof name +"<br>")
      document.write("name is "+typeof age +"<br>" )
      console.log("welcome to my world"+ nane +"hii");
      alert("menaga");
  }
  mine()
  document.write("<hr>")
  let details={
    person:"menaga",
    age:20,
    gender:"female",
    address:"4/74 vettukadu,vennandur,namakkal(637505)",
    siblings:"anna,thangachi",
    off:function(){
        let msg =`my name is ${this.person}menaga.my age is ${this.age}.i am a ${this.gender}.my address is ${this.address}.
        my siblingsis ${this.siblings}`;
        document.write(msg);
    }
        
    }

details.off();
