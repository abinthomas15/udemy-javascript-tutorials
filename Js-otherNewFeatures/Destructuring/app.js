// Destructuring Assignment

let a,b;
[a, b] = [100, 200];

// Rest Pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500, 600];

console.log(rest);

// Array Destructuring

const people = ['jhon', 'Beth', 'Mike'];

const[person1, person2, person3] = people;

console.log(person1, person2, person3);

// Object Destructuring
const person = {
  name : 'Jhon Doe',
  age : 29,
  city: 'miami',
  gender: 'male'
}

// Old Es6
const name = person.name,
      age = person.age,
      city = person.city;

// New Es6
const {name ,age, city} = person;