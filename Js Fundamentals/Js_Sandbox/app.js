  // // alert('Hello World');

  // // Log into Console

  // // console.log('Hello World');
  // // console.log(123);
  // // console.log(true)
  // // var greeting = 'hello';
  // // console.log([1, 2, 3, 4])


  // val= Math.round(2.4);
  // console.log(val);

  // val = Math.ceil(2.7);
  // console.log(val)

  // val = Math.sqrt(64);
  // console.log(val);

  // val = Math.min(2,22,23,33,4,4,1,22)
  // console.log(val)

  // val = Math.floor(Math.random()*20+1);
  // console.log(val)

  // const firstName = 'Abin'
  // const age = 22
  // lastName = 'Thomas'

  // val = 'My name is'   + firstName +   "and I am"+ age ;  
  // console.log(val);

  // val = 'That\'s awesome, I can\'t wait';
  // console.log(val)

  // val = firstName.length
  // console.log(val)

  // val = firstName.concat(' ', lastName);
  // console.log(val)

  // val = firstName.indexOf('i');
  // val = firstName.lastIndexOf('n')

  // val = firstName.charAt('2');
  // console.log(val)

  // str = 'Hello there my name is Abin Thomas';
  // val  = str.split(' ');
  // console.log(val)
  // tag = 'web design, web development, web app';
  // val = tag.split(',');
  // console.log(val)


  // Template Strings or Literals

const names = 'Jhon';
const age = 22;
const job = 'web developer';
const city = 'Miami';
let html;

function hello(){
  return 'hello';
}

html = `
  <ul>
    <li>Name: ${names}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'} </li>
  </ul>
`;
  document.body.innerHTML = html;

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,55,36,47,1);
const fruits = ['Apple', 'Orange', 'Bannana', 'Pear'];
const mixed = [22, 'apple', true, undefined, null, {a:1, b:1}, new Date()];
let val;

val = numbers.length;
val = Array.isArray(numbers);
val = numbers[2];
numbers[2] = 100;
console.log(numbers)
console.log(val);

const person = {
  firstName : 'Steve',
  lastName : 'jobs',
  age : 30,
  email : 'stevejobs@gmail.com',
  hobbies : ['music' ,'sports'],

  adress : {
    city : 'Miami',
    state : 'Florida'
  },

  getBirthYear : function(){
    return 2021 - this.age;
  }
}

let val;

val = person.firstName;

console.log(val)