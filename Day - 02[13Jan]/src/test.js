// ES6 arrow function
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};

// ES6 template literals
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;

// ES6 default parameters
const multiply = (a, b = 1) => {
    return a * b;
};

// ES6 spread operator
const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => {
    return a + b + c + d + e;
};
const result = sum(...numbers);

// ES6 destructuring assignment
const person = {
    name: "Alice",
    age: 25,
    city: "New York",
};
const { name, age, city } = person;

// ES6 modules
import { add, subtract } from "./mathUtils";
