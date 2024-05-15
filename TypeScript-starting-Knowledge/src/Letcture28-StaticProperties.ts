// In static properties we can direct access the value example in below

class MathOpreation{
    // 1 example
    public static PI : number = Math.PI

    // 2 example
    public static add(num1:number , num2:number){
        return num1 + num2;
    }

    // 3 example
    public static subtract(num1:number , num2:number){
        return num1 - num2;
    }

    // 4 example
    public static Division(num1:number , num2:number){
        return num1 / num2;
    }

    // 5 example
    public static Multiplication(num1:number , num2:number){
        return num1 * num2;
    }

    // 6 example
    public static Modalulo(num1:number , num2:number){
        return num1 % num2;
    }


}

console.log(MathOpreation.PI);
console.log(MathOpreation.add(30,20));
console.log(MathOpreation.subtract(30,20));
console.log(MathOpreation.Division(30,20));
console.log(MathOpreation.Modalulo(30,20));
console.log(MathOpreation.Multiplication(30,20));





