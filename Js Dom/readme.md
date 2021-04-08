# DOM
Document object Model.
Structured representation of a html model.
Tree of nodes/elements created by a browser
Javascript is used to manipulate the DOM.

``` val = document; ``` -> It gives the entire document in the html.
``` val = document.all; ``` ->  to get the entire document which look like a array of items
``` val = document.all[0]; ``` -> we can access the index/item of the html element
``` val = document.all.length; ``` -> the number of elemnts in the DOM
``` val = document.all.body ``` -> we can access the elemts of the DOM such as body, head, etc..
``` val = document.all.head ``` ->
``` val = document.all.doctype ``` ->
``` val = document.all.domain ``` ->
``` val = document.all.URL ``` ->
``` val = document.all.contentType ``` ->

``` val = document.all.forms ``` -> inroder to get all the forms
``` val = document.all.forms[0] ``` -> 0th form of the DOM.
`` val = document.all.forms.id ``
`` val = document.all.forms[0].method``
`` val = document.all.forms[0].link``

## DOM Selectors.
### getElementById
``` console.log(document.getElementById('task-title')); ``` -> to get the element with the id 'task-title'.
``` console.log(document.getElementById('task-title').id) ``` ->  to get the id of the element
``` console.log(document.getElementById('task-title').className) ``` -> to get the class of the element


``` const taksTitle = document.getElementById('task-title'); ```



##### Change the styling , 
``` taksTitle.style.background = '#333'; ``` 
``` taksTitle.style.color = '#fff'; ```
``` taksTitle.style.padding = '5px'; ```  
``` taksTitle.style.display = 'none'; ``` 

#### Change the Content.
```taksTitle.textContent = 'Task List'; ``` 
```taksTitle.innerText = 'Task List'; ``` 

#### document.querySelector()
``` console.log(document.querySelector('#task-title'));    ```

```  console.log(document.querySelector('.card-title'));    ```

   ```   console.log(document.querySelector('h5'));   ```

   ```    document.querySelector('li').style.color = 'red';   ```

   ```  document.querySelector('li:last-child').style.color = 'green';   ```

  ```   document.querySelector('li:nth-child(3)').style.color = 'yellow';   ```

   ```    document.querySelector('li:nth-child(4)').textContent = 'Hello World';    ```

  ```   document.querySelector('li:nth-child(odd)').style.background = '#333';    ```

   ```    document.querySelector('li:nth-child(even)').style.background = '#fcfc';    ```

 #### document.getElementsByClassName ()

 ```
   const items = document.getElementsByClassName('collection-item');
  console.log(items);
  console.log(items[0]);
  items[0].style.color = 'red';
  items[3].textContent = 'Hello';
```
#### document.getElementsByTagName

```
  const lis = document.getElementsByTagName('li');
  console.log(lis);
  console.log(lis[0]);
  lis[0].style.color = 'red';
  lis[3].textContent = 'Hello';

```

#### Convert HTML collection into an array .

```
  lis = Array.from(lis);

  lis.reverse();

  console.log(lis);

  
  lis.forEach(function(li, index){
    console.log(li.className);
    li.textContent = `Hello  ${index}`;
  });

    console.log(lis);
```
#### document.querySelectorAll

```
  const items = document.querySelectorAll('ul.collection li.collection-item');

  items.forEach(function(items,index){
    items.textContent = `${index} hey`
  });

  let liOdd = document.querySelectorAll('li:nth-child(odd)');
  let liEven = document.querySelectorAll('li:nth-child(even)');

  liOdd.forEach(function(items, index){
    // items.style.background = '#ccc';
    liOdd[index].style.background = 'green'
  });

  for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4'
  }

```

#### Get Child Nodes :

``` const list = document.querySelector('ul.collection'); ```
  ``` val = list.childNodes ``` ->  it gives the child of ul with the text node also . ie the closing li tags ``` li ``` will be counted as a collection in this case 
  ``` val = list. children; ``` -> here the problem of text node is resolved and only the children of ul collection are given.

* The number of nodes are calculated by the following method ,
-> 1 - Element (If it is an element the node will be calculated as 1)
-> 2 - Attribute
-> 3 - Text Node
-> 8 - Comment
-> 9 - Document Itself
-> 10 - Doctype

#### children of children

``` val = list.children[3].children;  ```

#### Count child element 

``` val = list.childElementCount; ```

#### Get Parent Element

``` val = listItem.parentNode; ```
``` val = listItem.parentElementNode; ```
``` val = listItem.parentElement.parentElement; ```

#### Get next Sibilings

``` val = listItem.nextSibiling; ```
``` val = listItem.nextElementSibiling; ```

#### Get prev Sibilings

``` val = listItem.prevSibiling; ```
``` val = listItem.prevElementSibiling; ```

#### Create the element

```
const li = document.createElement('li');

```

``` li.className = 'collection-item';  ``` ->  adding a class to the element

``` li.id = 'new-item'; ``` -> adding id to the element 

``` li.setAttribute('title','New-Item'); ``` -> adding an atribute to the element 

```li.appendChild(document.createTextNode('Hello World')); ``` -> creating a text-node and appending.


#### Replacing an element 

``` const newHeading = document.createElement('h2'); ``` -> Creating an Element 
``` newHeading.id = 'task-title' ``` -> adding an id to the element 
``` newHeading.appendChild(document.createTextNode('Task List')); ``` -> giving the new text-node 
``` const oldHeading = document.getElementById('task-title'); ```  ->  get the old heading which is to be replaced
``` const cardAction = document.querySelector('.card-action'); ``` ->  get the parent 
``` cardAction.replaceChild(newHeading, oldHeading); ``` -> replacing the old with the new.


#### Removing Element :
``` const lis = document.querySelectorAll('li'); ``` 
``` cons list = document.querySelector('ul'); ```
``` lis[0].remove(); ```
``` lis.removeChild(lis[3]); ```


#### Class and Attributes :
```  const firstLi = document.querySelector('li:first-child');```
``` const link = firstLi.children[0]; ``` 

``` let val ; ```

``` val = link.className; ``` -> gives the class name of the firstli children
``` val = link.classList ; ``` -> gives the all the class list of the first li children
``` val = link.classList[0]; ```  -> gives the first class list

``` link.classList.add('test'); ``` -> to add a class of test to the li

``` link.classList.remove('test'); ``` -> remove the class

#### Attributes :
``` val = link.getAttribute('href'); ``` -> gives the value of the href 
``` val = link.setAttribute('href', 'https://google.com') ``` -> set the attribute to google.com
``` val = link.hasAttribute('href'); ``` -> It will give true or false while checking wheather it is present or not.
``` val = link.removeAttribute('href'); ``` 

#### Events in Dom
``` 
document.querySelector('clear-tasks').addEventsListner('click',
function(){
  console.log('helo world');
  e.preventDefault();
});  
```
This preventDefault feature is preventing the a tag to go to its link and showing the console hello world.
by deafult the hello world message will flash down the console very quick and it will get redirectd to the given link in the 
href.
This can be prevented by adding the # symbol to the href so that it gets redirected to same page itself.

Inorder of using the anonymus function we can also use the named function.

```
 document.querySelector('clear-tasks').addEventsListner('click',onClcick);

 function onClick(e){
   console.log('clicked');  
   let val;
   val = e;
   val = e.target;
   console.log(val);
 }; 

```

### Local Storage Item 

local storage will stay until you clear it with your programs. but the session storage will be cleared once the browser is reloaded or closed. 

