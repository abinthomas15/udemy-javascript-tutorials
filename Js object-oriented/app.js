// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// const abin = new Person('Abin', 22);
// const brad = new Person('brad', 30);

// console.log(abin.age);
// console.log(brad.age);

const abin = new Person('abin', '06-15-1998');

console.log(abin.calculateAge());



// String

const name1 = 'Jeff';
const name2 = new String ('Jeff');

console.log(typeof name2);

if(name2 ===   'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

//  Numbers

const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2)

// Boolean

const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2)

// Function

const getSum1 = function(x,y){
  return x + y;
}

const getSum2 = new Function('x','y', 'return 1 + 1');

console.log(getSum2(1,1));

//  Objects

const john = {name: "Jhon"};
const john2 = new Object({name:"John"});

console.log(john2)

// Arrays
const arr = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

console.log(arr2);

// Prototypes Explained

// Object.prototype
// Person.prototype

// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// Calculate Age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get Full Name
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

// Gets Married
Person.prototype.getMarried = function(newLastName){
  this.lastName = newLastName
}

const abin = new Person('Abin', 'Thomas', '06-15-1998');
const john = new Person('John','Doe', 'March 20 1994');

console.log(john);

console.log(abin.calculateAge());

console.log(abin.getFullName());

john.getMarried('smith');
console.log(john.getFullName());


// Prototypal Inheritance

// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
} 

// Greeting
Person.prototype.greeting = function(){
  return ` Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Jhon', 'Doe');
console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this.firstName,lastName);

  this.phone = phone;
  this.membership = membership;
  this.firstName = firstName;
  this.lastName = lastName;
}
// Inherit the Person Prototype
Customer.prototype = Object.create(Person.prototype);

// create customer
const customer1 = new Customer('Tom', 'Smith','555-555-555','Standerd' );

console.log(customer1);

const personPrototypes = {
  greeting : function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'mary';
mary.lastName = 'Williams';
mary.age = 30;

mary.getsMarried('johns');

console.log(mary.greeting());

const brad = Object.create(personPrototypes,{
  firstName : {value :'brad'},
  lastName : {value :'Traversy'},
  age : {value : 30}
});

console.log(brad);
console.log(brad.greeting());

// ES6 Classes :

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting () {
    return `Hello there ${this.firstName} ${this.lastName}}`
  }

  calculateAge () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried (newLastName) {
    this.lastName = newLastName;
  }

  static addNumber(x,y) {
    return x + y;
  }
}

const mary = new Person('mary', 'williams', '06-15-1998');
mary.getsMarried('johns');
console.log(mary);

console.log(Person.addNumber(1,2))  ;

// Inheritance in ES6 Classes :
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName ;
    }
    greeting(){
      return `Hello there ${this.firstName} ${this.lastName}`;
    }
  }

  class Customer extends Person {
    constructor(firstName, lastName, phone, membership ){
      super(firstName, lastName);    

      this.phone = phone;
      this.membership = membership;
    }

    static getMembershipCost() {
      return 500;
    }
  }

  const jhon = new Customer ('jhon', 'williams', '555-555-555', 'Standerd');

  console.log(jhon.greeting());

  console.log(Customer.getMembershipCost);