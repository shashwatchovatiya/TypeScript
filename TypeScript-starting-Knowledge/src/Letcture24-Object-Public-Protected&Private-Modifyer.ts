/*

                |    Parent      |    Child class    |    Outer Class
----------------|----------------|-------------------|--------------------
Publice         |        ✅     |        ✅        |       ✅        
Protected       |        ✅     |        ✅        |       ❌
Private         |        ✅     |        ❌        |       ❌


Publice file Protect : એમાં બધી ફાઈલનું ઍક્સેસ કરી શકાય છે  || All files can be accessed in it
Protected File Protect : એમાં પેરેન્ટ્સ ફાઈલ અને ચાઈલ્ડ ફાઈલનું ઍક્સેસ કરી શકાય છે || 
                       It can access parent file and child file
Private file Protect : એમાં પેરેન્ટ્સ ફાઈલનો જ ઍક્સેસ કરી શકાય છે ||
                        Only the parent file can be accessed in it  
*/


// Parent Class

class PersonInfo2 {
  public  name: string;
  public  age:number;
  public  hobbies : string[];


    constructor(name:string,age:number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce():string{
        return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")}`
    }
}

// Childe Class
class StudentInfo13 extends PersonInfo2 {
    grade : string;

    constructor(name:string,age:number,hobbies:string[],grade:string){
        super(name,age,hobbies);
        this.grade = grade;
    }

// introduce() {
//     return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")} . My gread is ${this.grade}`;
    // } Or 

    introduce(){
        return` ${super.introduce()} . I am gread ${this.grade} `
    }
}


// Outsider class
const person204:PersonInfo1 = new PersonInfo2("Rajat",19,["reading","coding"]);
const person205:PersonInfo1 = new StudentInfo13("Rana",19,["reading","coding"],"BCA-SEM-3");
const person206:PersonInfo1 = new PersonInfo2("Rohan",19,["sport","traveling"]);

// console.log(person201);
console.log(person205.introduce());

 