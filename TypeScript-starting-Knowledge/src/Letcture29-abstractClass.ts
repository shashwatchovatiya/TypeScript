// Abstract class means we can create a common class whic use many time so we create common class that call the abstract class 

/***************************  for cricle  ********************************/
// Creating a Common class
abstract class Shap{
    constructor(protected color:string){}
    abstract claculatetheArea():number ;
    abstract displayArea : ()=> void;
}

// Extande this value means we can use common class porerties
class Circle extends Shap{
    constructor(protected color:string,protected radius : number){
        super(color)
    }

    public claculatetheArea(){
        return Math.PI * this.radius * this.radius
    }

    displayArea =  () => {
        // console.log(this.claculatetheArea);
       return  console.log(`this is a ${this.color} circle with a radius ${this.radius}` );
       
    }   
}

const circle = new Circle("blue",8);
console.log(circle.claculatetheArea());
circle.displayArea();

/***************************  for square  ********************************/

abstract class ShapForSquare {
    constructor(protected color:string){}
    abstract CalCulateAreaSquare():number;
    abstract DisaplayAreOfSquare :()=> void ;
}

class Square extends ShapForSquare {
    constructor(protected color:string,protected area : number){
        super(color)
    };

    public CalCulateAreaSquare(): number {
        return this.area * this.area
    }

    DisaplayAreOfSquare= () => {
       return console.log(`This is a ${this.color} circle with a radius ${this.area} `);
        
    }
}

const square1 = new Square("red",10);
console.log(square1.CalCulateAreaSquare());
square1.DisaplayAreOfSquare()

/***************************  for Triengal  ********************************/

abstract class ShapForTriangle{
    constructor(protected color:string){}
    abstract CalCulateArearTriangle():number;
    abstract DisaplayAreOfTriangle :()=> void ;
}

class Triangle  extends ShapForTriangle{
    constructor(protected color:string,protected base : number,protected height :number){
        super(color)
    };

    public CalCulateArearTriangle(): number {
        return (this.base*this.height)/2
    }

    public DisaplayAreOfTriangle= () =>{
        return console.log(`This is a ${this.color} Triengle with a base is  ${this.base}  and its Heigth is ${this.height}`);
    }
}

const tringle  = new Triangle("red",9,56)   
console.log(tringle.CalCulateArearTriangle());
tringle.DisaplayAreOfTriangle();
