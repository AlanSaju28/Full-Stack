// 1. 

function makeTea (typeOfTea){
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea ("lemon tea")
// console.log(teaOrder)

// 2. 

function orderTea (teaType){
  function confirmOrder(){
    return `Order confirmed for ${teaType}`
  }
  let result = confirmOrder("Chai")

  return result

}

let endResult = orderTea("Chai")
// console.log(endResult)


// 3. Arrow Functions

const calculateTotal = (price, quantity) => {
  return price*quantity
}

let totalCost = calculateTotal(25,2)
// console.log(totalCost);


// 4. Higher Order Function (First-Class Function)

function makeTea(typeOfTea){
  return `makeTea : ${typeOfTea}`
}

function processTeaOrder (teaFunction){

  return teaFunction("earl grey")
}

let order = processTeaOrder(makeTea)
// console.log(order)


// 5. 

/* function createTeaMaker (){
  return function (teaType){
    return `Making ${teaType}`
  }
}

let teaMaker = createTeaMaker();
console.log(teaMaker)
console.log(teaMaker("green tea"))
 */


function createTeaMaker(name) {
  return function (teaType) {
    return `Making ${teaType} ${name}`;
  };
}

let teaMaker = createTeaMaker("Alan");
console.log(teaMaker("green tea"));
