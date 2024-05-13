// Getter and Setter Methode

// in the getter methode we can access the value

// in the setter methode we can set the value with using spacifiece condition


class PersonInfo4 {
    private Age: number | undefined;
    private gender: string | undefined;
    constructor(
        public name: string,
    ) { }


    public set age(age: number) {
        if (age < 0 || age > 150) {
            throw new Error("Age is not vlide")
        } else
            this.Age = age
    }

    public set Gender(gender: string) {
        if (gender === "Male" || gender === "Female" || gender === "Other") {
            this.gender = gender
        } else {
            throw new Error("Invalid Gender")
        }
    }

    public get age(): number {
        if (this.Age === undefined) {
            throw new Error("Age is not defined");
        } else {
            return this.Age;
        }
    }

    public get Gender(): string {
        if (this.gender === undefined) {
            throw new Error("Gender is not defined");
        } else {
            return this.gender;
        }
    }

    introducer() {
        return `Hii i am ${this.name} and i am ${this.gender} .I am ${this.Age} year old`
    }
}

const person210: PersonInfo4 = new PersonInfo4("Shashwat")

person210.age = 19;
person210.Gender = "Male";

// console.log(person210.introducer());
console.log(person210.introducer());

console.log(person210.age);
console.log(person210.Gender);



