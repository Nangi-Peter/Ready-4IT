//comments:
// Single-line comment
/* Multi-line
   comment */

//variables:
   let name = "John";
let age = 25;
console.log(name, age);
age = 26; // Can reassign

//const variables:
const PI = 3.14;
const COLORS = ["red", "blue"];
console.log(PI, COLORS);
COLORS.push("green"); // Can modify
// PI = 3.14159; // Error

//typeof operator:
console.log(typeof "text");    // string
console.log(typeof 42);        // number
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (quirk!)

//String operations:
let str1 = "Hello";
let str2 = "World";
let combined = str1 + " " + str2;
console.log(combined); // "Hello World"
console.log(str1.toUpperCase()); // "HELLO"

//Number operation:
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333
console.log(a % b); // 1

//Boolean logic:
let isTrue = true;
let isFalse = false;
console.log(isTrue && isFalse); // false
console.log(isTrue || isFalse); // true
console.log(!isTrue);           // false
console.log(10 > 5);           // true

//undefined vs null:
let empty;         // undefined
let nothing = null; // null
console.log(empty == null);   // true
console.log(empty === null);  // false
console.log(typeof empty);    // undefined
console.log(typeof null);     // object

//typeof deep dive:
console.log(typeof NaN);       // number
console.log(typeof []);        // object
console.log(typeof {});        // object
console.log(typeof function(){}); // function
console.log(typeof Infinity);  // number

//console.log()methods:
console.log("Normal message");
console.warn("Warning!");
console.error("Error!");
console.table([{name: "John", age: 25}]);
console.time("timer");
// Code here
console.timeEnd("timer");