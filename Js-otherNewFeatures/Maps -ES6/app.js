// MAPS - Key Value Pair , It can use any type of key

const map1 = new Map ();

// Set Keys
const key1 = 'some string',
      key2 = '{}',
      key3 = function() {};

// Get Values by key
map1.set(key1,'value of key1');
map1.set(key2,'value of key2');
map1.set(key3,'value of key3');

// Get values by key
console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// Count value
console.log(map1.size);

// Iterating Maps

// Loop using for.. of to get keys and values
for(let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterates keys only
for(let key of map1.keys()) {
  console.log(key);
}

// Iterate Values Only
for(let value of map1.values()) {
  console.log(value);
}

