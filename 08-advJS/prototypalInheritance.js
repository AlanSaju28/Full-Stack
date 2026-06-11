function Person (name){
  this.name = name;

}

Person.prototype.greet = function (){
  console.log(`Hello, ${this.name}`)
}

let response = new Person ("Alan")
response.greet()
console.log(response)