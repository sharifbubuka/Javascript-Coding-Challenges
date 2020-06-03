//ARRAY METHODS EXAMPLES AS SEEN AT https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#

const numbers = [1,2,3,4,5,6,7,8,9];
//Array.indexOf()
console.log(numbers.indexOf(2));
//==> 1

//Array.flat()
const people = ["John", "Tom", "Peter", "Isaac", numbers];
console.log(people.flat());
//==> ["John", "Tom", "Peter", "Isaac", 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Array.flatMap()
const array_to_flat = [11,12,13, numbers];
console.log(array_to_flat.flat().flatMap(element => [element, element * element]));
//==> [11, 121, 12, 144, 13, 169, 1, 1, 2, 4, 3, 9, 4, 16, 5, 25, 6, 36, 7, 49, 8, 64, 9, 81]

//Array.forEach()
let new_array = new Array();
numbers.forEach(index => new_array.push(index + 2));
console.log(new_array);
//==> [3, 4, 5, 6, 7, 8, 9, 10, 11]

//Array.includes()
console.log(people.includes('Simon'));
//==> false
console.log(people.includes('Peter'));
//==> true

//Array.indexOf()
console.log(numbers.indexOf(10));
//==> -1
console.log(numbers.indexOf(5));
//==> 4

//Array.join()
let names = people.splice(0, 4); // ["John", "Tom", "Peter", "Isaac"]
console.log(names.join(' + '));
//==> John + Tom + Peter + Isaac

//Array.keys()
//The keys() method returns a new Array Iterator object that contains the keys for each index in the array
let names_iterator = names.keys();
for(const name of names_iterator){
    console.log(name);
}
//==> 0
//==> 1
//==> 2
//==> 3

//Array.lastIndexOf()
// The lastIndexOf() method returns the last index at which a given element can be found in
// the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
let randoms = [2,6,3,2,2,7,10,3,7,4,3];
console.log(randoms.lastIndexOf(3));
//==> 10
console.log(randoms.lastIndexOf(7));
//==> 8
console.log(randoms.lastIndexOf(11));
//==> -1

//Array.map()
console.log(randoms.map(random => random + random));
//==> [4, 12, 6, 4, 4, 14, 20, 6, 14, 8, 6]

//Array.pop()
console.log(randoms.pop());
//==> 3
console.log(randoms);
//==> [2,6,3,2,2,7,10,3,7,4]

//Array.push()
names.push("Sharif", "Barack");
console.log(names);
//==> ["John", "Tom", "Peter", "Isaac", "Sharif", "Barack"]

//Array.reduce() <<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce>>
let reduce_function = (current, next) => current + next;
let counting = [1,2,3,4,5,6,7,8,9];
console.log(counting.reduce(reduce_function));
//==> 45
console.log(counting.reduce(reduce_function, 5));
//==> 50

//Array.reduceRight() <<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight>>

//Array.reverse()
console.log(names.reverse());
//==> ["Barack", "Sharif", "Isaac", "Peter", "Tom", "John"]

//Array.shift()
let to_shift = [1,2,3,4];
console.log(to_shift.shift());
//==> 1
console.log(to_shift);
//==> [2, 3, 4]

//Array.slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
//==> Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
//==> Array ["camel", "duck"]
console.log(animals.slice(1, 5));
//==> Array ["bison", "camel", "duck", "elephant"]

//Array.some()
//The some() method tests whether at least one element in the 
//array passes the test implemented by the provided function. It returns a Boolean value.
let ages = [14, 18,25,34,50];
console.log(ages.some(age => age < 18));
//==> true
console.log(ages.some(age => age > 50));
// false

//Array.sort()
let to_sort = [8,4,9,1,3,6,2,7,5,10];
console.log(to_sort.sort((a,b) => a-b));
//==> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(to_sort.sort((a,b) => b-a));
//==> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//Sorting objects
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
console.log(items.sort((a,b) => a.value - b.value));
//==> 0: {name: "The", value: -12}
//==> {name: "Magnetic", value: 13}
//==> {name: "Edward", value: 21}
//==> {name: "Sharpe", value: 37}
//==> {name: "Zeros", value: 37}
//==> {name: "And", value: 45}

//Array.splice()
console.log(to_sort.splice(1,1));
//==> [9]
console.log(to_sort.splice(2,3));
//==> [7,6,5]
console.log(to_sort.splice(5));
//==> [1]

//Array.localeString() <<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString>>
//The toLocaleString() method returns a string representing the elements
//of the array. The elements are converted to Strings using their toLocaleString
//methods and these Strings are separated by a locale-specific String (such as a comma “,”).
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);
//==> "1,a,12/21/1997, 2:12:00 PM"
//This assumes "en" locale and UTC timezone - your results may vary

//Array.toString()
const arr = [1, 2, 'a', '1a'];
console.log(arr.toString());
//==> "1,2,a,1a"

//Array.unshift()
const to_unshift = [1, 2, 3];
console.log(to_unshift.unshift(4, 5));
//==> 5
console.log(to_unshift);
//==> Array [4, 5, 1, 2, 3]

//Array.values() <<Compare with Array.keys() that returns keys
//The values() method returns a new Array Iterator object that contains 
//the values for each index in the array.
let names_iterator_2 = names.values();
for(const name of names_iterator_2){
    console.log(name);
}
//==> Barack
//==> Sharif
//==> Isaac
//==> Peter
//==> Tom
//==> John

//Array[Symbol.iterator]() <<This is the same as Array.values()
const ids = [19983,28474,38648,94757];
const e_ids = ids[Symbol.iterator]();
for(id of e_ids) {
    console.log(id);
}
//==> 19983
//==> 28474
//==> 38648
//==> 94757

//Array[Symbol.species]() <<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species>>

