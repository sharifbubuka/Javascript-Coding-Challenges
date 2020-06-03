//console.log('Hello from Node.js...');

//Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

//})

console.log(__filename, __dirname);
const Person = require('./person');

const person1 = new Person('John Doe', 30);

person1.greeting();

//21:57 