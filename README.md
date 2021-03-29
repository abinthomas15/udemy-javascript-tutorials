# udemy-javascript-tutorials

# udemy-javascript-tutorials

## Variables (var), let , Constants(const)
* var can have more than 2 values assigned for it 
``` 
var ='Jhon Doe'
console.log(name);
name = 'steve smith';
console.log(name);
```

#### Initializing variables

```
 var greetings;
console.log(greetings);
greeting = 'hello';
console.log(greetings);
```

* The characters that can be inside a variable are letters, numbers, underscore(_) and money sign($)
  and it cannot start with a number
  it can start with a money sign but it is not recommended.

##### Multiword Variable
* var firstName = 'Jhon'  -> Camel case
* var first_name = 'Sarah' -> underscore
* var FirstName = 'Abin' ->  Pascal case


### let
  It is almost similar to variable 
  ``` 
let ='Jhon Doe'
console.log(name);
name = 'steve smith';
console.log(name);
```

### Constanst (const)

```
const name = 'jhon';
console.log(name)
name = 'sarah';
```
We cannot reassign a constant to another value
And also we cannot initiate a constant

We can add a number to the array of constants but we cannot completely ulter the data of the constant

``` const numbers = [1,2,3,4,5]
    numbers.push(6)
```
this is possible with constants that we adding a new number to the list of arrays

```
const numbers = [1,2,3,4,5]
const numbers = [1,2,3,4,5,6]
```
we cannot do this. reassigning to a new variable is not supported with constants

* We can also change the content or data of the object with const

``` const person = {
  name : Abin
  age : 22
}

person.name = Abin Thomas 
person.name = 21
```

This can be done by using a const with objects but assiging another object with the name person is not allowed it throws error!!

## DataTypes :

##### Primitive data types : 
Stored directly in the location the variable accesses . Stored on the stack

##### Referance data types :
Accessed by referances. Its just a pointer to a location memory

* There are 6 Primitive data types in javascript
  String
  Number -> Int , decimals and floats are all consider as numbers
  Boolean
  Null -> Empty Value 
  Undefined -> variable that is not assigned a value
  Symbols(Es6)

* The referanced data types are
  Arrays
  Object Literals
  Functions
  Datas
  Anything else..

* JavaScript is a dynamically typed language these are associated with values not variables that it can have more than one values that is it can hold multiple values
* In javascript we also dont need to specify the type of items 
* There are supersets to js and addons to allow static typing such as Typescript or flow

##### PRIMITIVE
###### String
```const name = 'jhon Doe';
console.log(typeof name);
```
#### Numbers
```
const age = 45;
console.log(typeof age);
```

###### boolean
```
const hasKids = true;
console.log(typeof hasKids);
```
###### null
```
const car = null;
console.log(typeof car);
```
###### undefined
```
let test;
console.log(typeof test);
```
###### symbol
```
const sym = Symbol();
console.log(typeof sym);
```

#### Referance Types :

###### Arrays
```
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);
```

###### Objects Literal
```
const address = {
  city: Boston
  state: NA
}
```
###### Date
```
const today = new Date();
console.log(today)
console.log(typeof today)
```

### Type Conversion

##### Number to String
```
val = String(55);
console.log(val);
console.log(typeof val);
console.log(val.length); -> works with string only and returns the number of characters in the string
```

##### Boolean to a String
```
val = String(true)
console.log(val);
console.log(typeof val);
console.log(val.length);
```

#### Date to String
```
val = string(new Date ());
console.log(val);
console.log(typeof val);
console.log(val.length);
```

#### Array to String
```
val = string([1,2,3,4]);
console.log(val);
console.log(typeof val);
console.log(val.length);
```

#### toString()  
```
val = (5).toString();
val = true.toString();
```

#### String to number
```
val= Number('4')
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2); -> Only works with number, 2 indicates show the first two decimal places  

```
#### String to Boolean
```
val = Number(true)
console.log(val); - > 1
console.log(typeof val); -> Number
console.log(val.toFixed(2); -> 1
```
If its false the console.log(val.toFixed) will say 0

If a string such as 'hello' is passe on to that it will say that "NaN" to indicate that it cannot be made as a number

If we do an array alseo '[1,2,3]' it wil say Nan

To get the correct number we uses 

```
val = parseInt('100');
``` 
It only gives the integer

when we need to use decima we use
```
val = parseFloat('100.20')
```

#### Type Conversion

```
const val1 = string(4);
const val2 = 6;
val sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);
``` 
It will give an output of '46'

### Numbers And Math Object.

```
const num1 = 100;
const num2 = 50;
let val ;
```
##### Simple math with numbers
```
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;
```

#####
val = Math.PI; -> gives the value of pi
val = Math.E;
val = Math.round(2.4); -> 2
val = Math.ceil(2.4); -> 3
val = Math.floor(2.8); -> 2
val = Math.sqrt(64); -> 8
val = Math.abs(-3); -> 3
val = Math.max(2,22,322,211,222,11) -> returns the max number
val = Math.random(); -> it gives random number 

val = Math.floor(Math.random()*20+1);


#### string Methods and concatenation
```
const firstName = 'Abin';
const lastName = 'Thomas';
const age = 22;


let val;
val = firstName + lastName;
console.log(val);
```
it will give o/p as AbinThomas

so if we need to add a space in between those
we use concatenation to add a space in between 

```
val = firstName + ' ' + lastName ;
console.log(val)
```

###### Append
```
val = 'Abin' 
val += 'Thomas'
``` 
It gives output as 'Abin Thomas'

```
val = 'My name is'+ firstName + 'and my age is'+age ;  
```

##### Escaping
```
  val = 'That\'s awesome, I can\'t wait';
```

#### Length

It is used count the number of words in a string
```
val = firstName.length
```

#### concat
```
val = firstName.concat(' ', lastName);
```

#### Change case
```
val = firstname.toUppercase();
val = lastName.toLowercase();
```

#### Index of 
```
val = firstName.indexOf('1'); -> A
val = lastName.lastIndexoOf('1'); -> s
console.log(val) ; 
```
####  charAt

```
val = firstName.charAt('2');
``` 
Gives the letter 'i' as it is in the second postion

#### slice

```
val = firstName.slice(0, 4);
val = firstName.slice(-3);
```
It will give first 4 words in the first case
negative numbers indicates that it will give the words in the reverse order

#### Split

```
str = 'Hello there my name is Abin Thomas';
val  = str.split(' ');
tag = 'web design, web development, web app';
val = tag.split(',');
```

#### Replace 
it is used to replace something inside the string

val = str.replace('brad', 'jack');

#### Includes
It shows wheather the content is there or not by saying true or false

```
val = str.includes('hello')
```

## Template Strings or Literals :
```
const name = 'Jhon';
const age = 22;
const job = 'web developer'
const city = 'Miami'
let html

function hello(){
  return 'hello';
}

html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'} </li>
  </ul>
`
```

### Arrays and array methods :

arrays are used to store multiple values in one variable and they can be mutated and irreated and used with very complex algoritham.
```
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,55,36,47,1);
const fruits = ['Apple', 'Orange', 'Bannana', 'Pear'];
const mixed = [22, 'apple', true, undefined, null, {a:1, b:1}, new Date()];
let val;
```
These are the some arrays we can have in javascript there are many more..

##### To get Array Length
```
val = numbers.length;
```
##### To check for an Array 
```
val = Array.isArray(numbers);
```

##### To get a single value from an array
```
val = numbers[2];

console.log(numbers);
console.log(val);
```

##### Insert into Arrays :
```
numbers[2] = 100; 
```

##### Find the index of Value:
```
val = numbers.indexOf(36);

```

##### Mutating Arrays

```
numbers.push(250);

``` 
250 will be added to the array at the back of the array

##### Unshift
it is used to add a number to the begining of the array.
```
numbers.unshift(122);
```

#### Take off from the end
It is used to delete the end element of the array
```
numbers.pop();
```

#### Take from the start
It is used to delete the first element of the array
```
  numbers.shift();

```

#### Splice Values 
It is used to remove the elemnts first value is the starting of the index second value is the ending. ie, they will take the values accordin to the given range  
```
numbers.splice(1,3  );
```

#####