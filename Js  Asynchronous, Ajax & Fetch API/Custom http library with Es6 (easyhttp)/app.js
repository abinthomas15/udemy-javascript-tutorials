const http = new EasyHttp ;

// // Get Users 
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// // User Data
// const data = {
//   name : 'Abin Thomas',
//   username : 'abinthomas',
//   email : 'abinthomas156@gmail.com',
//   phone : 8289822756
// }

// // Create Post
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

//   // Update Post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(error => console.log(error))

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(error => console.log(error))
