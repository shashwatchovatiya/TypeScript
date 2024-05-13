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
    constructor(
        public name: string,
        public  age : number,
        public hobbies :string[]
    ){}

    introduce():string{
             return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")}`
    }
}


class StudentInfo14 extends PersonInfo3 {
    // grade : string;

    // constructor(name:string,age:number,hobbies:string[],grade:string){
    //     super(name,age,hobbies);
    //     this.grade = grade;
    // }

//*********************/ Or *********************************
constructor(
    name :string,
    age:number,
    hobbies: string[],
    public grade : string
){
    super(name,age,hobbies)
}

// introduce() {
//     return `Hii my name is ${this.name} and i am ${this.age} old and my Hobiies is ${this.hobbies.join(",")} . My gread is ${this.grade}`;
    // } 
    
//*********************/ Or *********************************

    introduce(){
        return` ${super.introduce()} .My gread is ${this.grade} `
    }
}

const person207:PersonInfo3 = new PersonInfo3("Jaydeep",19,["reading","coding"]);
const person208:PersonInfo3 = new PersonInfo3("Jigar",19,["reading","coding"]);
const person209:PersonInfo3 = new StudentInfo14("Jiganesh",19,["reading","coding"],"A+");

// console.log(person201);
console.log(person207.introduce());
console.log(person209.introduce());


 