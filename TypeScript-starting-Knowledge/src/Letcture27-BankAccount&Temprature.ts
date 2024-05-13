// Bank Account Balance

class BankAccount{
    private _balance :number = 0;
    
    public get balance():number{
        return this._balance;
    }

    public set balance(newBalance){
        if( newBalance < 0 ){
            throw new Error("This value not accepet");
        }
        else{
            this._balance = newBalance ;
        }
    }

}

const account1 =  new BankAccount()

account1.balance = 100000;

// console.log(account1);


// Temperature Code

class Temperature{
    private _celsius:number  = 0;
    private _fath :number = 0 ;

    public get celsius(){
        return this._celsius ;
    }

    public set celsius(newCelsius:number){
        this._celsius = newCelsius ;
    }

    // public get fath(){
    //     return this._fath
    // }

    // public set fath(newFath){
    //     this._fath = newFath
    // }

    public get farhit(){
        return (this._celsius * 9) /5 + 32
    }
    public set farhit(newFarhit){
        this.celsius =((newFarhit - 32 ) * 5) / 9;
    }

}

const temp = new Temperature()

temp.celsius =25;
temp.farhit = 87 ;

console.log(temp.farhit);
console.log(temp.celsius);
