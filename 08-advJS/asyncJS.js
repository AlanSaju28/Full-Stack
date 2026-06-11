console.log("Alan");

function sayHello() {
  console.log("Just wanted to say hello");
}

setTimeout(() => {
  sayHello();
}, 4000);

for (let index = 0; index < 6; index++) {
  console.log(index);
}
