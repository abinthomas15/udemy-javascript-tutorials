// Basic Structure

(function (){
  // Declare private vars and functions

  return {
    // Declare public var and functions
  }
}) ();

// Standerd Module patter
const UICtrl = (function () {
  let text = 'Hello World';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  }
  return {
    callChange : function () {
      changeText();
    }
  }
})();

UICtrl.callChange();

// Revealing module pattern
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('item added..');
  }

  function get (id) {
    return data.find(item => {
      return item.id === id;
    });
  }
  return {
    add:add,
    get:get
  }
}) ();

ItemCtrl.add({id:1, name:'john'});
console.log(ItemCtrl.get(1));

