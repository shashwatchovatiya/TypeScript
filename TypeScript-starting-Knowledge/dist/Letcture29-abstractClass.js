"use strict";
// Abstract class means we can create a common class whic use many time so we create common class that call the abstract class 
/***************************  for cricle  ********************************/
// Creating a Common class
class Shap {
    color;
    constructor(color) {
        this.color = color;
    }
}
// Extande this value means we can use common class porerties
class Circle extends Shap {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    claculatetheArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        // console.log(this.claculatetheArea);
        return console.log(`this is a ${this.color} circle with a radius ${this.radius}`);
    };
}
const circle = new Circle("blue", 8);
console.log(circle.claculatetheArea());
circle.displayArea();
/***************************  for square  ********************************/
class ShapForSquare {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Square extends ShapForSquare {
    color;
    area;
    constructor(color, area) {
        super(color);
        this.color = color;
        this.area = area;
    }
    ;
    CalCulateAreaSquare() {
        return this.area * this.area;
    }
    DisaplayAreOfSquare = () => {
        return console.log(`This is a ${this.color} circle with a radius ${this.area} `);
    };
}
const square1 = new Square("red", 10);
console.log(square1.CalCulateAreaSquare());
square1.DisaplayAreOfSquare();
/***************************  for Triengal  ********************************/
class ShapForTriangle {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Triangle extends ShapForTriangle {
    color;
    base;
    height;
    constructor(color, base, height) {
        super(color);
        this.color = color;
        this.base = base;
        this.height = height;
    }
    ;
    CalCulateArearTriangle() {
        return (this.base * this.height) / 2;
    }
    DisaplayAreOfTriangle = () => {
        return console.log(`This is a ${this.color} Triengle with a base is  ${this.base}  and its Heigth is ${this.height}`);
    };
}
const tringle = new Triangle("red", 9, 56);
console.log(tringle.CalCulateArearTriangle());
tringle.DisaplayAreOfTriangle();
