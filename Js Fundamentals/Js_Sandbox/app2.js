// const person = {
//   firstName : 'Steve',
//   lastName : 'jobs',
//   age : 30,
//   email : 'stevejobs@gmail.com',
//   hobbies : ['music' ,'sports'],

//   adress : {
//     city : 'Miami',
//     state : 'Florida'
//   },

//   getBirthYear : function(){
//     return 2021 - this.age;
//   }
// }

// let val;

// val = person.firstName;

// val = person.lastName;  

// val = person.adress.state;

// val = person.getBirthYear();

// console.log(val)

// const people = [
//   {name : 'Jhon', age : 30},
//   {name : 'Mike', age : 23}
// ];

// for(let i = 0; i < people.length; i++){
//   console.log(people[i].age)
// }

// const today = new Date();
// const birthday = new Date('9-10-1998 11:25:00');

// val = today.getFullYear();

// console.log(val);

// let birthday;

// birthday = new Date ('15-06-1998');
// birthday.setMonth(3);
// bithday.setFullyear(1997);
// birthday.setDate(17);
// console.log(birthday);

// const names  = 'Steve';
// const age = 30;

// if(age > 0 && age < 12){
//   console.log(`${names} is a child`)
// } else if (age >12  && age < 19){
//   console.log(`${names} is a teenager`)
// } else{
//   console.log(`${names} is an adult`)
// }

// if(age < 16 || age >60){
//   console.log(`${names} can not run in the race`)
// } else{
//   console.log(`${names} can run in the race`)
// }

// id = 101;
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// switch(new Date().getDay()){
//   case 0:
//     day = 'sunday';
//     break;
//    case 1:
//     day = 'monday';
//     break;
//    case 2:
//     day = 'tuesday';
//     break;
//    case 3:
//     day = 'wednesday';
//     break;
//    case 4:
//     day = 'thursday';
//     break;
//    case 5:
//     day = 'saturday';
//     break;
//    case 6:
//     day = 'sunday';
//     break;
// }
// console.log(`today is ${day}`);

// function greet(){
//   console.log('Hello');
// }

// greet();

// function greet(){
//   return 'Hello';
// }

// console.log(greet());

// function greet(firstName, lastName){
//   return 'Hello'+ ' ' + firstName + ' ' + lastName;
// }

// console.log(greet('Abin','Thomas'));

// function greet(firstName = 'Abin', lastName = 'Thomas'){
//   return 'Hello'+ " " + firstName + ' ' + lastName;
// }

// console.log(greet());

// const square = function(x){
//   return x*x;
// };

// console.log(square(3));


// const todo = {
//   add : function(){
//     console.log('Add todo..');
//   },
//   edit : function(){
//     console.log('Delete todo');
//   }
// }
// console.log(todo.add());


// for(let i = 0 ; i <= 10; i++){
//   console.log(i);
// }

// for(let i = 0 ; i < 10; i++){
//   if(i === 2){
//    console.log('2 is my favourite number'); 
//    continue;
//   }
//   if(i === 4){
//     console.log('stop the loop');
//     break;
//   }
//   console.log('Number' + i);
// }

let val;
val = window.innerHeight;
val = window.innerWidth;
console.log(val); 

val = window.scrollY;
console.log(val); 

var a = 1;
let b = 2;
const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }
// test();

if(true) {
  var a = 4;
 let b = 5;
 const c = 6;
 console.log('Block Scope: ', a, b, c);
}

console.log('Global Scope: ',a, b, c);