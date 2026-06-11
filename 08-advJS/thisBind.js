let person = {
  firstName: "Alan",
  greet() {
    return `Hi I am ${this.firstName}`;
  },
};

// console.log(person.greet());

const greetFunction = person.greet;

// console.log(greetFunction());


const greetBind = person.greet.bind({firstName:"Alan"})
console.log(greetBind());