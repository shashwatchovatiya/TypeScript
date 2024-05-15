"use strict";
// In static properties we can direct access the value example in below
class MathOpreation {
    // 1 example
    static PI = Math.PI;
    // 2 example
    static add(num1, num2) {
        return num1 + num2;
    }
    // 3 example
    static subtract(num1, num2) {
        return num1 - num2;
    }
    // 4 example
    static Division(num1, num2) {
        return num1 / num2;
    }
    // 5 example
    static Multiplication(num1, num2) {
        return num1 * num2;
    }
    // 6 example
    static Modalulo(num1, num2) {
        return num1 % num2;
    }
}
console.log(MathOpreation.PI);
console.log(MathOpreation.add(30, 20));
console.log(MathOpreation.subtract(30, 20));
console.log(MathOpreation.Division(30, 20));
console.log(MathOpreation.Modalulo(30, 20));
console.log(MathOpreation.Multiplication(30, 20));
