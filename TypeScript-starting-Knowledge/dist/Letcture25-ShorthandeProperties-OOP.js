"use strict";
// Short hand properties in OOP with using the Access modifyer in Letcture 24
// class PersonInfo3 {
//     name: string;
//     age:number;
//     hobbies : string[];
//     constructor(name:string,age:number,hobbies:string[]){
//         this.name = name;
//         this.age = age;
//         this.hobbies = hobbies;
//     }
//     introduce():string{
//         return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")}`
//     }
// }
// ************************ Or Short hande trick is in below ***********************************
class PersonInfo3 {
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
class StudentInfo14 extends PersonInfo3 {
    grade;
    // grade : string;
    // constructor(name:string,age:number,hobbies:string[],grade:string){
    //     super(name,age,hobbies);
    //     this.grade = grade;
    // }
    //*********************/ Or *********************************
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    // introduce() {
    //     return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")} . My gread is ${this.grade}`;
    // } 
    //*********************/ Or *********************************
    introduce() {
        return ` ${super.introduce()} .My gread is ${this.grade} `;
    }
}
const person207 = new PersonInfo3("Jaydeep", 19, ["reading", "coding"]);
const person208 = new PersonInfo3("Jigar", 19, ["reading", "coding"]);
const person209 = new StudentInfo14("Jiganesh", 19, ["reading", "coding"], "A+");
// console.log(person201);
console.log(person207.introduce());
console.log(person209.introduce());
