/* 

for multi line commenting shortcut 

SHIFT + ALT + a

*/

// 1.

// Another way of declaring arrays :

// let teaFl = new Array ("green tea", "orange tea", "oolong tea")

// let teaFlavors = ["green tea", "black tea", "oolong tea"]

// let firstTea = teaFlavors[0];

// console.log(firstTea);

// 2.

// let cities = new Array("London", "Tokoyo", "Paris", "New York")

// const favoriteCity = cities[2];
// console.log(favoriteCity)

// 3.
// let teaTypes = new Array("herbal tea", "white tea", "masala chai")

// teaTypes.splice(1,1,"jasmine tea")
// console.log(teaTypes)

// 4.
// let citiesVisited = new Array("mumbai","sydney")

// citiesVisited.push("berlin")

// console.log(citiesVisited)

// 5.

// let teaOrder = ["chai","iced tea", "matcha", "earl grey"]

// let lastOrder = teaOrder.pop()

// console.log(lastOrder)

// 6.

// Memory referencing

// let popularTeas = new Array("green tea", "oolong tea", "chai");
// let softCopyTeas = popularTeas;
// console.log(`this is softCopy teas:  ${softCopyTeas}`);
// popularTeas.pop();
// console.log(popularTeas);


// 7. 

let topCities = ["berlin", "singapore", "new york"]

// Spread Operator : ...

let hardCopyCities = [...topCities]
hardCopyCities = topCities.slice()
// topCities.pop()
// console.log(hardCopyCities)



// 8.
let europeanCities = ["paris","rome"]
let asianCities = new Array("tokoyo", "bangkok")

let worldCities = europeanCities + asianCities


// console.log(worldCities)
// console.log(typeof (worldCities))

worldCities = [europeanCities + asianCities]

// console.log(worldCities)

worldCities = europeanCities.concat(asianCities)
// console.log(worldCities)

// 9. 

let teaMenu = new Array("masala chai", "oolong tea", "green tea", "earl grey")

const menuLength = teaMenu.length

// console.log(menuLength)

// 10.

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"]

let isLondonInList = cityBucketList.includes("London")

console.log(isLondonInList)