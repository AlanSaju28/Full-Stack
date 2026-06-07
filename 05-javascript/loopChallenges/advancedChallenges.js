// 1.

let teas = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = [];

for (let i = 0; i<teas.length; i++){
  if (teas[i] === "chai"){
    break;
  }
  selectedTeas.push(teas[i])
}

// console.log(selectedTeas);


// 2. 

let cities = ["London", "New York", "Paris", "Berlin"]

let visitedCities = [];

for (let c = 0; c <cities.length; c++){
  if (cities[c] === "Paris"){
    continue;
  }
  visitedCities.push(cities[c])
}
// console.log(visitedCities)

// 3.

let numbers = [1,2,3,4,5]
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4){
    break;
  }
  smallNumbers.push(num)
}
// console.log(smallNumbers)


// 4.

let differentTeas = ["chai", "green tea", "herbal tea", "black tea"]

let preferredTeas = []

for (const tea of differentTeas) {
  if (tea === "herbal tea"){
    continue;
  }
  preferredTeas.push(tea)
}
// console.log(preferredTeas)



// 5. Need Further Review About this problem

/* let citiesPopulation = {
  "London" : 8900000,
  "New York" : 8400000,
  "Paris" : 2200000,
  "Berlin" : 3500000
}

let cityNewPopulations = {};

// console.log(Object.keys(citiesPopulation));
// Object.freeze
// Object.values

for (const city in citiesPopulation) {
  // console.log(citiesPopulation[city])
  // key = value
  if (city === "Berlin"){
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
} */

// console.log(cityNewPopulations);


// 6. 

let worldCities = {
  "Sydney" : 5000000,
  "Tokoyo" : 9000000,
  "Berlin" : 3500000,
  "Paris" : 2200000
}

let largeCities = {}

for (const city in worldCities) {
  if (worldCities[city] < 3000000){
    continue;
  }
  largeCities [city] = worldCities[city];
  
}

// console.log(largeCities)


// 7. 

// Inside the function you can't use break and continue

let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"]

let availableTeas = [];

teaTypes.forEach((tea) => {
  if (tea === "chai"){
    return;
  }
  availableTeas.push(tea)
});

// console.log(availableTeas)


// 8.

let cityNames = ["Berlin", "Tokoyo", "Sydney", "Paris"]

let traveledCities = []

cityNames.forEach(city => {
  if (city === "Sydney"){
    return;
  }
  traveledCities.push(city)
});

// console.log(traveledCities)


// 9. 

let diffNums = [2,5,7,9]

let doubledNumbers = []

let result = 1;

for(let i = 0; i<diffNums.length; i++){
  if (diffNums[i] === 7){
    continue
  }
  result = diffNums[i] * 2;
  doubledNumbers.push(result)
}

// console.log(doubledNumbers)


// 10.

let chaiNames = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]

let shortTeas = [];


for (const tea of chaiNames) {
  if (tea.length > 10){
    break;
  }
  shortTeas.push(tea)
}
console.log(shortTeas)

