// Iterator example
function nameIterator (names) {
  let nextIndex = 0;

  return {
    next : function() {
      // return nextIndex < names.length ?
      // {value : names[nextIndex++], done: false} :
      // {done : true}
      if(nextIndex < names.length){
        return {value : names[nextIndex++], done: false}
      } else {
        return { done: true}
      }
    }
  }
}

// Create an array of elements
const nameArr = ['jack', 'jill','john'];

// Init iterator and pass in the names array
const names = nameIterator(nameArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());


// Generators - functions that can return multiple values
function* sayNames() {    //inorder to make a function generators we add * to the end of the function keyword.
  yield 'jack';
  yield 'jill';
  yield 'john'
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next());

// ID Creator using Generators
function* createIds() {
  let index = 1;  
  while (true) {
    yield index ++;
  }
}

const gen = createIds();

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);