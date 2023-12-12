// // obj
// let name = prompt("Enter your name:")
// console.log(name);
// let empid = prompt("Enter your id:")
// console.log(empid);

// let person={
//     name:name,
//     empid:empid,
//     details(){
//         return `my name is:${this.name},my empid is:${this.empid}`
//     }
// }

// console.log(person.details());

// let nativue = new Object();
// nativue.me = prompt("my nativue is:")
// nativue.frd = prompt("my frd nativue is:")
// console.log(nativue.me);
// console.log(nativue.frd);
// nativue.place =() =>{
//     return `my nativue is: ${this.me}, my frd nativue is : ${this.frd}`
// }

// //class
// class emp {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;


//     }
// }
// const emp1 = new emp("Menaga", "22");
// console.log(emp1.name);
// console.log(emp1.age);
// console.table([18,10,27,6,2]);


// //constructor
// class Student{
//     constructor(name, age, cgp){
//         this.name = name;
//         this.age = age;
//         this.cgp = cgp;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }
// const Student1 = new Student("menu", 22, 87) ;

// console.log(Student1.name);
// console.log(Student1.age);
// console.log(Student1.cgp);
// Student1.study();

// //static
// class Car {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello(x) {
//       return "Hello " + x.name;
//     }
//   }
  
//   const myCar = new Car("Ford");
// console.log(Car.hello(myCar));

// // inheritance
// class Parent{
//     constructor(surname){
//         this.surname=surname;
//     }
//     parentMethod(){
//         console.log(" i am parent");
//     }
// }
// class Child extends Parent{
//     constructor(surname,name){
//         super(surname)
//         this.name=name
//     }
//     childMethod(){
//         console.log("i am child" +"menu");
//     }
   
// }

// let A=new Child("menaga")
// console.log(A.surname);
// A.parentMethod()
// A.childMethod()



// //get and set
// const persons = { 
// 	firstName: "menaga", 
// 	lastName: "devi", 
// 	get fullName() { 
// 		return `${this.firstName} ${this.lastName}`; 
// 	}, 
// 	set fullName(name) { 
// 		const parts = name.split(" "); 
// 		this.firstName = parts[0]; 
// 		this.lastName = parts[1]; 
// 	}, 
// }; 

// console.log(persons.fullName);

// persons.fullName = "menu kan"; 
// console.log(persons.firstName); 
// console.log(persons.lastName); 

//Objects as arguments
function greet(person) {
    console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  }
  
  // Create an object
  let personObj = {
    firstName: 'Menaga',
    lastName: 'Devi'
  };
  
  
  greet(personObj);
  































