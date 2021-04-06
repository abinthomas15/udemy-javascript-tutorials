// let val;

// val = document;

// console.log(val);

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taksTitle = document.getElementById('task-title');

// taksTitle.style.background = '#333';

// taksTitle.style.color = '#fff';

// taksTitle.style.padding = '5px';

// // taksTitle.style.display = 'none';

// taksTitle.textContent = 'Task List'; 

// taksTitle.innerText = 'My Task';

// // document.querySelector() :

//   console.log(document.querySelector('#task-title'));

//   console.log(document.querySelector('.card-title'));

//   console.log(document.querySelector('h5'));

//   document.querySelector('li').style.color = 'red';

//   document.querySelector('li:last-child').style.color = 'green';

//   document.querySelector('li:nth-child(3)').style.color = 'yellow';

//   document.querySelector('li:nth-child(4)').textContent = 'Hello World';

//   document.querySelector('li:nth-child(odd)').style.background = '#333';

//   document.querySelector('li:nth-child(even)').style.background = '#fcfc';

//   document.getElementByClassName ()

//   const items = document.getElementsByClassName('collection-item');
//   console.log(items);
//   console.log(items[0]);
//   items[0].style.color = 'red';
//   items[3].textContent = 'Hello';

//   const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

//   console.log(listItems);
  
//   document.getElementsByTagName

//   let lis = document.getElementsByTagName('li');
//   console.log(typeof(lis));
//   console.log(lis[0]);
//   lis[0].style.color = 'red';
//   lis[3].textContent = 'Hello';

//   // Convert HTML collection into an array . 

//   lis = Array.from(lis);

//   lis.reverse();

//   console.log(lis);

//   lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `Hello  ${index}`;
//   });

//   console.log(lis);

// // document.querySelectorAll

//   const items = document.querySelectorAll('ul.collection li.collection-item');

//   items.forEach(function(items,index){
//     items.textContent = `${index} hey`
//   });

//   let liOdd = document.querySelectorAll('li:nth-child(odd)');
//   let liEven = document.querySelectorAll('li:nth-child(even)');

//   liOdd.forEach(function(items, index){
//     // items.style.background = '#ccc';
//     liOdd[index].style.background = 'green'
//   });

//   for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4'
//   }

