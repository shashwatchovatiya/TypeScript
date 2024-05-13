class PersonInfo1 {
    name: string;
    age:number;
    hobbies : string[];


    constructor(name:string,age:number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce():string{
        return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")}`
    }
}

class StudentInfo12 extends PersonInfo1 {
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

const person201:PersonInfo1 = new PersonInfo1("Shashwat",19,["reading","coding"]);
const person202:PersonInfo1 = new PersonInfo1("Vishal",19,["reading","coding"]);
const person203:PersonInfo1 = new StudentInfo12("Vansh",19,["reading","coding"],"A+");

// console.log(person201);
console.log(person203.introduce());

 