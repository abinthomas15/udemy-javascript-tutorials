// let sayHello = function() {
//   console.log('hello');
// }

// let sayHello =() => {
//   console.log('hello');
// }

// One File Function does not need braces
// let sayHello = () => console.log('Hello')

// One line returns
// const sayHello = () => 'hello';

// To return Object
// const sayHello = () => ({ msg : 'hello'});

// Single Parametes (here name) does not need paranthesis
// const sayHello = name => console.log(`Hello ${name}`)

// More than one parametes we need to use paranthesis
// const sayHello = (firstName, lastName )=> console.log(`Hello ${firstName} ${lastName}`)
// sayHello('Abin','thomas');

const users = ['Nanthan', 'Abin', 'Brad'];

// const nameLengths = users.map(function(user) {
//   return user.length;
// }); 

const nameLengths = users.map((user) => {
  return user.length;
}); 

console.log(nameLengths);


// Fetch Example with arrow functions

// Get Local Text File
function getText() {
  fetch('test.txt')
    .then((response) =>
       response.text()   
    )
    .then((data) => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => 
      console.log(err)
    ); 
}