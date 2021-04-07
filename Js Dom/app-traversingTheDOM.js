// let val ;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// console.log(val)

// val = list.childNodes
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName; 
// val = list.childNodes[3].nodeType;

// val = list.children;
// val = list.children[1];

// list.children[1].textContent = "Hello"

// val = list.firstChild;
// val = list.firstElementChild; 

// val = list.lastChild;
// val = list.lastElementChild;

// val = listItem.parentNode;
// val = listItem.parentElementNode;
// val = listItem.parentElement.parentElement;

// val = listItem.nextSibiling;
// val = listItem.nextElementSibiling;

// console.log(val);


// const li = document.createElement('li');
// li.className = 'collection-item';
// li.id = 'new-item';
// li.setAttribute('title', 'new-item');
// li.appendChild(document.createTextNode('Hello World'));

// // Create a new link element 

// const link = document.createElement('a');
// link.className = 'delete-item secondary-content';
// link.innerHTML = ' <i class ="fa fa-remove"></i>' ;
// li.appendChild(link);
// document.querySelector('ul.collection').appendChild(li);
// console.log(li);

// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//   console.log('helo world');
//   // e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click',onClick);

// function onClick(e){
//   // console.log('clicked');  
//   let val;
//   val = e;

//   // Event Target
//   val = e.target;
//   val = e.target.className;
//   val = e.target.classList;
//   // e.target.innerText = 'hello'; 

//   // Event Type
//   val = e.type;

//   // Timestamp
//   val = e.timeStamp; 

//   // coords event related to the window
//   val = e.clientY;
//   val = e.clientX;

  
//   // coords event related to the element
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
  
// }; 

// // Mouse Events
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5')

// Click
// clearBtn.addEventListener('click',runEvent);

// // Double Click
// clearBtn.addEventListener('dblclick',runEvent);

// // Mouse Down
// clearBtn.addEventListener('mousedown',runEvent);

// // Mouse Up
// clearBtn.addEventListener('mouseup',runEvent);

// // Mouse enter
// card.addEventListener('mouseenter',runEvent);

// // Mouse leave
// card.addEventListener('mouseleave',runEvent);

// // Mouse Over
// card.addEventListener('mouseover',runEvent);

// Mouse Move
// card.addEventListener('mousemove',runEvent);


// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY:${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// }

// // Input Events.

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const select = document.querySelector('select');

// // Clear Input Value 
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown',runEvent);

// // Keyup
// taskInput.addEventListener('keyup',runEvent);

// // keypress
// taskInput.addEventListener('keypress',runEvent);

// // Focus
// taskInput.addEventListener('focus',runEvent);

// // blur
// taskInput.addEventListener('blur',runEvent);

// // Cut
// taskInput.addEventListener('cut',runEvent);

// // Paste
// taskInput.addEventListener('paste',runEvent);

// // Input
// taskInput.addEventListener('input',runEvent);

// // Change
// select.addEventListener('change',runEvent);



// function runEvent(e){
//   console.log(` Event type: ${e.type}`);

//   console.log(e.target.value);

  // Get Input value
  // console.log(taskInput.value);
  
  // e.preventDefault();
// }

// // Event Bubbling

// document.querySelector('.card-title').addEventListener('click',
// function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
//   console.log('card title');
// });

// document.querySelector('.card').addEventListener('click',
// function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
//   console.log('col');
// });

// // Event Deligation 

// const delItem = document.querySelector('.delete-item')

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click',deleteItem);

// function deleteItem(e){
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){
//   //   console.log('delete-item');
//   // }

//   if(e.target.parentElement.classList.contains('delete-item')){
//     console.log('delete-item');
//     e.target.parentElement.parentElement.remove();
//   }
// }


// // Set local Storage Item :
// localStorage.setItem('name','john');
// localStorage.setItem('age','20');


// // Set session storage Item :
// sessionStorage.setItem('name', 'beth');

// // Remove from local Storage
// localStorage.removeItem('name');

// // Get Items from local Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name);
// console.log(age);

// // clear Local Storage
// localStorage.clear();


document.querySelector('form').addEventListener('submit',
function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify('tasks'));
 
  alert('Task Saved');

  e.preventDefault();
});