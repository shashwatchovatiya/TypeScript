"use strict";
// Getter and Setter Methode
// in the getter methode we can access the value
// in the setter methode we can set the value with using spacifiece condition
class PersonInfo4 {
    name;
    Age;
    gender;
    constructor(name) {
        this.name = name;
    }
    set age(age) {
        if (age < 0 || age > 150) {
            throw new Error("Age is not vlide");
        }
        else
            this.Age = age;
    }
    set Gender(gender) {
        if (gender === "Male" || gender === "Female" || gender === "Other") {
            this.gender = gender;
        }
        else {
            throw new Error("Invalid Gender");
        }
    }
    get age() {
        if (this.Age === undefined) {
            throw new Error("Age is not defined");
        }
        else {
            return this.Age;
        }
    }
    get Gender() {
        if (this.gender === undefined) {
            throw new Error("Gender is not defined");
        }
        else {
            return this.gender;
        }
    }
    introducer() {
        return `Hii i am ${this.name} and i am ${this.gender} .I am ${this.Age} year old`;
    }
}
const person210 = new PersonInfo4("Shashwat");
person210.age = 19;
person210.Gender = "Male";
// console.log(person210.introducer());
console.log(person210.introducer());
console.log(person210.age);
console.log(person210.Gender);
