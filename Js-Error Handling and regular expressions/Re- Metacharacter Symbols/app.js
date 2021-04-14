let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i ;  // Must start with h , is used that the letter is case sensitive
re = /world&/i ;// end with world 
re = /^world&/i; // Start and end with 
re = /h.llo/i; //macthes any one character

// Brackets [] - Character sets 
re = /gr[ae]y/i ; //must be an a or an e 
re = /[GF]ray/ ;  // must be a G or F
re = /[^GF]ray/i ; // matches anything except g or f 
re = /[A-Z]ray/i ; // matches any uppercase letter
re = /[a-z]ray/i ; // matches any lowercase letter
re = /[A-Za-z]ray/i ; // matches any letter
re = /[0-9]ray/i ; // matches any digits

// Braes {} - Quantifiers 
re = /Hel{2}o/i ; // Must occures exactly {m} amount
re = /Hel{2,4}o/i ; // Must occures exactly {m}
re = /Hel{2,}o/i ; // Must occures atleast m times

// Shorthand character classes
re = /\w/ ;  // word character - alphanumeric or _
re = /\w+/;  // word character + one ore more
re = /W/ ;  // Non - Word character
re = /\d/;  // any digits
re = /\D/;  // Match any non- digits
re = /\s/;  // match whitespace char
re = /\S/;  //match non whitespace char
re = /Hell\b/i ;  // word bounday 
 
// Assertations
re = /x(?=y)/; // Match only if x is followed by y
re = /x(?!y)/; // Match only if x is not followed by y


// String to match
const str = '3x3x3x';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} Matches ${re.source}`)
  } else {
    console.log(`${str} does not match ${re.source}`)
  }
}

reTest(re, str);