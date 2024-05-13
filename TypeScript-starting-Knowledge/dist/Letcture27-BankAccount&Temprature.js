"use strict";
// Bank Account Balance
class BankAccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("This value not accepet");
        }
        else {
            this._balance = newBalance;
        }
    }
}
const account1 = new BankAccount();
account1.balance = 100000;
// console.log(account1);
// Temperature Code
class Temperature {
    _celsius = 0;
    _fath = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    // public get fath(){
    //     return this._fath
    // }
    // public set fath(newFath){
    //     this._fath = newFath
    // }
    get farhit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set farhit(newFarhit) {
        this.celsius = ((newFarhit - 32) * 5) / 9;
    }
}
const temp = new Temperature();
temp.celsius = 25;
temp.farhit = 87;
console.log(temp.farhit);
console.log(temp.celsius);
