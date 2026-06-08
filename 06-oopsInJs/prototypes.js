let computer = {cpu : 12};
let samsung = {
  screen : "HD",
  __proto__ : computer
};
let tomHardware = {}

// Dundun dur prototype (__proto__) 2 underscores are used. It is actually a keyword which is used in python

// console.log(`computer`, computer.__proto__)


// 2. Another example 

let genericCar = {tyre : 4}

let tesla = {
  driver : "AI",
}

Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla`,Object.getPrototypeOf(tesla))