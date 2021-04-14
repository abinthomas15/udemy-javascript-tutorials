let re;
re = /hello/i;
re = /hello/i;  // i makes the expression case sensitive
// re = /hello/g;  // Global Search

// console.log(re);
// console.log(re.source);

// exec() - Return the result in an array if there is a match or return null if there is a mismatch
const result = re.exec('abin hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - It returns true or false if there is match
const result = re.test('hello');
console.log(result);

// match() -  Return result array or null
const str = 'Helo there';
const result = str.match(re);
console.log(result);

// search() - Retunrs the index of the first match if not it will returns -1
const str = ' Hello There';
const result = str.search(re);
console.log(result);

// replace() - It will return a new string with some or all matches of a pattern
const str = 'Hello There';
const newstr = str.replace(re, 'Hai');
console.log(newstr);