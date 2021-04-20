// Create Symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

const myObj  = {};

console.log( typeof sym2);

// NO two symbols can be equal
console.log(Symbol('123') === Symbol('123'));

// console.log(`Hello ${sym1}`); // we cannot convert a symbol value to a string

// console.log(`Hello ${sym1.toString()}`);

// Unique Object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myobj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myobj.KEY3 = 'prop3'
myobj.KEY4 = 'prop4'
 
// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable for 
for(let i in myobj) {
  console.log(`${myobj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({key:'prop'}));
console.log(JSON.stringify({[Symbol]:'prop'}));
