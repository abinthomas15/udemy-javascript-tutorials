//  SETS - It store unique values of any type

const set1 =  new Set();

// Add values to the set
set1.add(100);
set1.add('A String');
set1.add({name: 'Abin'});
set1.add(true);

// const set2 = new Set([100, 'A string', true]);

// console.log(set2);

// console.log(set1);

// Get Count
// console.log(set1.size); 

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 +50 ));
// console.log(set1.has({name: 'Abin'}));

// Delete From a Set
// set1.delete(100);

// console.log(set1);

// Iterate throw set
// For of 

for (let item of set1) {
  console.log(item);
}

// forEach
// set1.forEach(() => {
//   console.log(value);
// });

// Convert into array
const setArr = Array.from(set1);
console.log(setArr);