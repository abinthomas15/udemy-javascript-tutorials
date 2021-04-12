## Asynchronous Programming

* In asynchronous codes usually there will be call back function inside a function so that it will fetch the data which is assigned to it and other programs will be laterally executed without looking the call back function . So that the program is not blocked

### What is Ajax ?

* Its called as Asynchronous javascript and XML . It recieves and send data asynchronously without interfacing the current page
Nowdays JSON is replaced with XML
* Make asynchronous request in the background
* no page reload/refresh
* Fetch data
* Very Interactive

### XmlHttpRequest (XHR) Object

* API in the form of an object
* Provided by the browsers JS enviornment
* Methods transfer between client or server
* Can be used with other protocols than HTTP
* Can work with data other than xml(JSON,plain text)

## HTTP Statuses
* 200 : OK 
* 403 : Forbidden
* 404 : Not Found

## Ready state values
* 0 - Request not initialized
* 1 - Server not estabilished
* 2 - Request recieved
* 3 - Processing request
* 4 - request finished and response is ready.

## What is an API ?
* Contract provided by one piece of software to another
* Structured request and response
* We just worked with API that takes requests and reply with jokes (Chuck Norris Project)

### Rest API
* REST stands for Representational State Transfer
* Architecture style for designing networked applications
* Relies on stateless, client server protocol
* Treats server objects as resources that can be created or destroyed
* can be used with any programming languages
* All APIs have their own rules and strucutres

### HTTP requests 
* GET : Retreive data from specified resource
* POST : Submit data to be processed to a specified resource
* PUT : Update a specified resource
* DELETE : Delete a specified resource

* HEAD : Same as get but does not return a body
* OPTIONS : Returns the supported HTTP Methods
* PATCH : Update partial resources

## Arrow Function

using some key symbols we can make the code shorter
one line function even does not need the braces


## Async and Await

whenever we are using async to begining of the function the we get a promise in the console