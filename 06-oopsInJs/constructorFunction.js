function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Mercedes", "Maybach");
// console.log(myCar)

function Tea(type) {
  this.type = type;
  this.describe = () => {
    return `this is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea)
// console.log(lemonTea.describe())

function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

// IMPORTANT NOTE : don't use arrow functions for prototype methods or object methods that need this. Use regular functions instead.

// let dog = new Animal("dog");

// console.log(dog.sound());

let cat = new Animal("cat");

// console.log(cat.sound());



// Errors

function Drink (name){
  if (!new.target){
    throw new Error ("Drink must be called with new keyword");
  }
  
  this.name
}

let tea = new Drink ("tea")
let coffee = Drink ("coffee")

