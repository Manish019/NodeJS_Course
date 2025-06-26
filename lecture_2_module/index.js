// console.log("we are learning about modules of Node Js");

// const { sub, mul, div, mod } = require("./utils");
// we can export a single function from a file old way

//const { sub, mul, div, mod } = require("./utils");


// we can import all the functions from a file new way
// Importing functions from utils.js using ES6 syntax
  import {sum, sub, mul, div, mod} from "./utils.js";

  
console.log("Add two number => ", sum(5,10));
console.log("Sub two number => ", sub(10,5));
console.log("Mul two number => ", mul(5,10));
console.log("Div two number => ", div(10,5));
console.log("Mod two number => ", mod(10,5));