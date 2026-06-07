// Object

// let obj = {}

// console.log(obj)
// console.log(typeof (obj));




let userName = {
  firstName : "Alan",
  isLoggedIn : true
};

// We can use const userName because the memory reference is constant but inside those are primitive datatypes which can be changed

// userName.firstName = "Ln"
// userName.lastName = "Saju"

// console.log(userName)


// Two ways to access the key in the object :

// 1. Using dot
// userName.firstName

// 2. Using []

// let gameName ={
//   "first Name": "Alaniz",
//   isActive : true
// };

// console.log(gameName["first Name"])
// console.log(gameName["isActive"])


// Array

// let anotherUser = ["Alan", true]
// console.log(anotherUser[0])


// Type conversion

// Implicit conversion

// let isValue = '2';
// console.log(Number(isValue));

// let abc = '2abc'
// console.log(Number(abc));

// console.log(typeof(NaN)); // NaN means Not A Number

console.log(Number(null))
console.log(Number(undefined))
console.log(typeof(Number(null)));
console.log(typeof(Number(undefined)));
