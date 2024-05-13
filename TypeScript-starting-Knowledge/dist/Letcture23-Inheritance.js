"use strict";
class PersonInfo1 {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")}`;
    }
}
class StudentInfo12 extends PersonInfo1 {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    // introduce() {
    //     return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")} . My gread is ${this.grade}`;
    // } Or 
    introduce() {
        return ` ${super.introduce()} . I am gread ${this.grade} `;
    }
}
const person201 = new PersonInfo1("Shashwat", 19, ["reading", "coding"]);
const person202 = new PersonInfo1("Vishal", 19, ["reading", "coding"]);
const person203 = new StudentInfo12("Vansh", 19, ["reading", "coding"], "A+");
// console.log(person201);
console.log(person203.introduce());
