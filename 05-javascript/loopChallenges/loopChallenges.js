// 1.
let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i; // sum = sum + i
  i++;
}
// console.log(sum)

// 2.

let countDown = [];
let j = 5;

while (j > 0) {
  countDown.push(j);
  j--;
}

// console.log(countDown)

// 3.

// let teaCollection = []
// let tea;

// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish )`)

//   if (tea !== "stop"){
//     teaCollection.push(tea)
//   }
// } while(tea !== "stop")

// 4.

// let total = 0;
// let k = 1;

// do {
//   total += k;
//   k++
// } while (k<=3)

// console.log(total)

// 5.

// let multipliedNumbers = [];
// let numbers = [2,4,6]

// for (let l = 0; l<=(numbers.length-1); l++){
//   result = numbers[l] * 2;
//   multipliedNumbers.push(result)
// }
// console.log(multipliedNumbers)

// 6.

let cities = ["Paris", "Tokoyo", "New York", "London"];
let cityList = [];

for (let index = 0; index < cities.length; index++) {
  let element = cities[index];
  cityList.push(element);
}

console.log(cityList);
