// async function myFunc() {
//   const promise = new Promise((resolve,reject) => {
//     setTimeout(() => resolve('Hello'), 2000);
//   });

//   const error = true;
//   if (!error){
//     const res = await promise; // wait until the promise is resolved.
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'))
//   }


// }

// myFunc()
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

async function getUsers() {
  // await the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once it is resolved
  const data  = await response.json();

  // Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));