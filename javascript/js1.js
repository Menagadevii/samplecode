function mine(){
    let nane="menaga";
    let age=54
    document.write("name is "+typeof name +"<br>")
    document.write("name is "+typeof age +"<br>" )
    console.log("welcome to my world"+ nane +"hii");
    alert("menaga");
}
mine()
let t = myFunction(4, 3);
document.getElementById("demo");

function myFunction(a, b) {
  return a * b;
}
function none(nom,age){//parameter
console.log("my name is, " + nom +"menaga. my age is "+age);
}
none("menaga",20);//arguments
none("devi",22)
function add(n1,n2){
    console.log(n1+n2);
}
add(22,45)
add(333,66)
function sub(n1,n2){
    console.log(n1-n2);
}
sub(22,45)
sub(333,66)
function mul(n1,n2){
    console.log(n1*n2);
}
mul(22,45)
mul(333,66)
function div(n1,n2){
    console.log(n1/n2);
}
div(22,45)
div(333,66)
function mol(n1,n2){
    console.log(n1%n2);
}
mol(22,45)
mol(333,66)
//assignment operator
let x=5;
//x++;
x+=2
console.log(x)
let y=5;
//x++;
y-=2
console.log(y)
let z=5;
//x++;
z*=2
console.log(z)
let u=5;
//x++;
u/=2
console.log(u)
let v=5;
//x++;
v%=2
console.log(v)
//increament,decrement
let a=20
let b=10
console.log(a);
console.log(a++)
console.log(a)
console.log(++a)
console.log(a)
console.log(a--)
console.log(a)
console.log(--a)
console.log(a)
//comparision
console.log(a<b);
console.log(a<=b);
console.log(a>b);
console.log(a>=b);
console.log(a===b);
console.log(a!==b);
console.log('menaga'<'devi');
console.log(a<"2");
console.log(true<1);
console.log(true==1);
console.log(true!=1);
console.log('1'===1)//strit equality
console.log('q'==='q');
console.log('1'==1);// loose equality
/*function ticket(age){
    if(age<=18){
        let type="adult";
    }else{
        let type="kid";
    }
}
ticket(33)*/
//conditional/ternary operator
let o=a<b ? 1:0;//condition ? true val : false val ;
console.log(o);
//logical

console.log(a>b && a>=b);//and
console.log(a<b || a>=b);// or
console.log(!(a>b));// not

//bitwise
//1 -> 00000001 -> 1
//2 -> 00000010 -> 2
//3 -> 00000011 -> 3
console.log(1 | 2);//a+b
console.log(1 & 2);//a.b
console.log(1^2);