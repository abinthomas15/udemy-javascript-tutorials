user = {email : 'joedoe@gmail.com'}

try {

  // // Produce a referance error
  // myfunction();

  // // Produce a type error
  // null.myfunction();

  // // Will produce a syntax error
  // eval('helo world');

  // // URI Error
  // decodeURIComponent('%');
  if(!user.name) {
    // throw 'User has no name'; 
    throw new SyntaxError('user has no name');

  }

} catch (e) {
  console.log(`User Error: ${e.message}`)
  // console.log(e);
  // console.log(e.message);
  // console.log(e.name);
} finally {
  console.log('Finally runs regardless of the result')
}

console.log('Program continues');