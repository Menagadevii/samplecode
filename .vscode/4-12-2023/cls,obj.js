//obj
const car1={
    model:"BMW",
    color:"pink",
    year:2023,
    drive:function(){
        console.log("you drive the car");
    },
    brake:function(){
        console.log("you step on the brakes");
    }

}
const car2={
    model:"mustang",
    color:"black",
    year:2024,
    drive:function(){
        console.log("you drive the car");
    },
    brake:function(){
        console.log("you step on the brakes");
    }

}

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();

//this keyword
const carA={
    model:"BMW",
    color:"pink",
    year:2023,
    drive:function(){
        console.log(`you drive the car ${this.model}`);
    }
}

const carAB={
    model:"mustang",
    color:"black",
    year:2023,
    drive:function(){
        console.log(`you drive the car ${this.model}`);
    }
}



carA.drive();
carAB.drive();

window.name="menaga"
console.log(window.name);

//class
class emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;


    }
}
const emp1 = new emp("Menaga", "22");
console.log(emp1.name);
console.log(emp1.age);

//constructor
class Student{
    constructor(name, age, cgp){
        this.name = name;
        this.age = age;
        this.cgp = cgp;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}
const Student1 = new Student("menu", 22, 87) ;

console.log(Student1.name);
console.log(Student1.age);
console.log(Student1.cgp);
Student1.study();

//static
class Car {
    constructor(name) {
      this.name = name;
    }
    static hello(x) {
      return "Hello " + x.name;
    }
  }
  
  const myCar = new Car("Ford");
console.log(Car.hello(myCar));

// inheritance
class Parent{
    constructor(surname){
        this.surname=surname;
    }
    parentMethod(){
        console.log(" i am parent");
    }
}
class Child extends Parent{
    constructor(surname,name){
        super(surname)
        this.name=name
    }
    childMethod(){
        console.log("i am child" +"menu");
    }
   
}

let A=new Child("menaga")
console.log(A.surname);
A.parentMethod()
A.childMethod()

//get and set
const person = { 
	firstName: "menaga", 
	lastName: "devi", 
	get fullName() { 
		return `${this.firstName} ${this.lastName}`; 
	}, 
	set fullName(name) { 
		const parts = name.split(" "); 
		this.firstName = parts[0]; 
		this.lastName = parts[1]; 
	}, 
}; 

console.log(person.fullName);

person.fullName = "menu kan"; 
console.log(person.firstName); 
console.log(person.lastName); 

//arguments
	function hello() { 
		console.log(arguments[1]); 
        console.log(arguments[2]);
	} 
	
	hello("haii", "Welcome to all"); 

// array of object
let arr=[
    {name:"menu",age:21,dob:"aug27"},
    {name:"mani",age:20,dob:"mar5"},
    {name:"hari",age:19,dob:"nov25"},
    {name:"shuru",age:18,dob:"may5"}
]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);









