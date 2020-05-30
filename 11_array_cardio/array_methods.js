//ARRAY METHODS EXAMPLES AS SEEN AT https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#

//Array.from();
console.log(Array.from('foo'));
//==> ["f", "o", "o"]
console.log(Array.from([1, 2, 3], x => x + x));
//==> [2, 4, 6]

//Array.isArray();
Array.isArray([1, 2, 3]);  //==> true
Array.isArray({foo: 123}); //==> false
Array.isArray('foobar');   //==> false
Array.isArray(undefined);  //==> false

//Array.entries();
let arr = ['a','b','c'];
let next = arr.entries().next();
console.log(next.value);
//==> (2) [0, "a"]

//Array().every(); 
let arr = [1,4,6,14,9,15,25];
let isBelowThreshold = value => value < 40;
console.log(arr.every(isBelowThreshold));
//==> true

//Array.fill();
let arr = [1,2,3,4,];
console.log(arr.fill(1));
//==> [1,1,1,1]
console.log(arr.fill(2,0,2));
//==> [2,2,3,4];

//Array.filter();
let numbers = [1,2,3,4,5,6,7,8,9,10];
let even = numbers.filter(index => index % 2 === 0);
console.log(even);
//==> (5) [2, 4, 6, 8, 10]

//Array.find();
let arr = [1,2,3,4,5,6,7,8,9,10];
let found = arr.find(element => element % 4 === 0);
console.log(found);
//==> 4

//Array.findIndex();
let arr = [3,4,5,6,7,8,9,10];
const isLargeNumber = (element) => element > 13; 
const issmallerNumber = (element) => element < 3; 
const isdivisibleBy7 = (element) => element % 7; 
console.log(arr.findIndex(isLargeNumber)); //==> -1
console.log(arr.findIndex(issmallerNumber)); //==> -1
console.log(arr.findIndex(isdivisibleBy7)); //==> 4

//Array.flat();
let arrays = [1,2,3, [4,5,6],7];
let flat = arrays.flat();
console.log(flat);
//==> (7) [1, 2, 3, 4, 5, 6, 7]

//Array.flatMap();
let arr = [1, 2, 3, 4];
console.log(arr.flatMap(x => [x * 2]));
//==> [2, 4, 6, 8]
console.log(arr.flatMap(x => [[x * 2]]));
//==> [[2], [4], [6], [8]]

//Array.forEach();
const arr = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
//==> expected output: "a"
//==> expected output: "b"
//==> expected output: "c"

//Array.includes();
const arr = [1, 2, 3,4,5];
console.log(arr.includes(2));
//==> true
console.log(arr.includes(3,3));
//==> false
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
//==> true
console.log(pets.includes('cow'));
//==> false

//Array.

