"use strict";

var _mathUtils = require("./mathUtils");

// ES6 arrow function
var greet = function greet(name) {
    console.log("Hello, " + name + "!");
};

// ES6 template literals
var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;

// ES6 default parameters
var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return a * b;
};

// ES6 spread operator
var numbers = [1, 2, 3, 4, 5];
var sum = function sum(a, b, c, d, e) {
    return a + b + c + d + e;
};
var result = sum.apply(undefined, numbers);

// ES6 destructuring assignment
var person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
var name = person.name,
    age = person.age,
    city = person.city;

// ES6 modules