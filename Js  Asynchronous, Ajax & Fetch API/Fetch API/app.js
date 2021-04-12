document.getElementById('button1').addEventListener
('click', getText);

document.getElementById('button2').addEventListener
('click', getJson);

document.getElementById('button3').addEventListener
('click', getExternal);

// // Get Local Text File
// function getText() {
//   fetch('test.txt')
//     .then(function(response){
//       return response.text();  
//     })
//     .then(function(data) {
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err) {
//       console.log(err);
//     }); 
// }


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


// Get local Json
function getJson() {
  fetch('post.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(a) {
        output += `<li>${a.body}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    }); 
}

// Get External API
function getExternal() {
  fetch('https://api.github.com/users')
    .then(function(a) {
      return a.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(e) {
        output += `<li>${e.id}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    }); 

}