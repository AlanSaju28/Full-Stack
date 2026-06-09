let car = {
  make : "Toyoto",
  model : "Camry",
  year : 2020,
  start : function (){
    return `${this.make} got started in ${this.year}`
  }
}

// console.log(car.start())

function Person (name,age){
  this.name = name
  this.age = age
}

let john = new Person("John", 20)
// console.log(john.name)



function Animal(type){
  this.type = type
}

// THIS IS CALLED PROTOTYPAL CHAIN

Animal.prototype.speak = function (){
  return `${this.type} makes a sound`
}


Array.prototype.Alan = function (){
  return `Custom Method ${this}`
}


let egArray = [1,2,3]
// console.log(egArray.Alan())


// CLASS

class Vehicle {
  constructor (make,model){
    this.make = make
    this.model = model
  }
  start (){
    return `${this.model} is a car from ${this.make}`
  }
}


// INHERITANCE

class Car extends Vehicle {
  drive (){
    return `${this.make} : this is an example of inheritance`
  };
}



let myCar = new Car("Mercedes", "Maybach")
// console.log(myCar.start())
// console.log(myCar.drive())

// ENCAPSULATION

class BankAccount {
  #balance = 0

  deposit (amount){
    this.#balance += amount;
    return this.#balance;
  }

  getBalance () {
    return `$ ${this.#balance}`;
  }
}

let Account = new BankAccount();
console.log(Account.balance)


// ABSTRACTION

class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());


// POLYMORPHISM

class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
// console.log(bird.fly());
// console.log(penguin.fly());

// static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

// console.log(Calculator.add(2, 3));

// Getters and setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;


// This _ is used for programmers to notify that this variable or data will be getting getter and setter function.