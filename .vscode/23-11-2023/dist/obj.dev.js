"use strict";

var person = new Object();
person.firstName = "John", person.lastName = "Doe", person.age = 50, person.eyeColor = "blue";
document.write(person.firstName + "is" + person.age + "years old");
document.write(person["firstName"] + "is" + person["age"] + "years old");
document.write("<hr>");
var details = {
  person: "menaga",
  ageu: 20,
  gender: "female",
  address: "4/74 vettukadu,vennandur,namakkal(637505)",
  siblings: "anna,thangachi"
};
document.write(details.person, "<br>");
details.ageu = 23;
document.write(details.ageu, "<br>");
document.write(details.gender, "<br>");
document.write(details.address, "<br>");
document.write(details.siblings, "<br>");
document.write(details.siblings.bro, "<br>");
document.write("<hr>");
var detailss = {
  personss: "menaga",
  agez: 20,
  genders: "female",
  addresss: "4/74 vettukadu,vennandur,namakkal(637505)",
  siblingss: "anna,thangachi",
  off: function off() {
    var msg = "my name is ".concat(this.personss, "menaga.my age is ").concat(this.agez, ".i am a ").concat(this.genders, ".my address is ").concat(this.addresss, ".\n        my siblingsis ").concat(this.siblingss);
    document.write(msg);
  }
};
detailss.off();