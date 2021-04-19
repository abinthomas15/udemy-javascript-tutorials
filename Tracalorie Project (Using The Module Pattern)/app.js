// Storage Controller
  const StorageCtrl = (function(){

    // Public Methods
    return {
      storeItem : function(item) {
        let items;
        // Check if any item in local storage
        if (localStorage.getItem('items')=== null) {
          items = [];
          // Push new item
          items.push(item); 
          // Set local storage
          localStorage.setItem('items', JSON.stringify(items));
        } else {
          // Get what is already in 
          items = JSON.parse(localStorage.getItem('items'));

          // Push new item
          items.push(item);

          // Re set the local storage
          localStorage.setItem('items', JSON.stringify(items));
        }

      },
      getItemsFromStorage : function () {
        let items;
        if(localStorage.getItem('items')=== null) {
          items = [];
        } else {
          items = JSON.parse(localStorage.getItem('items'));
        }
        return items;
      }
    }
  }) ();


// Item Controller
  const ItemCtrl = (function() {
    // Item Constructor
    const Item = function(id, name, calories){
      this.id = id;
      this.name = name;
      this.calories = calories;
    }
    // Data Structure / State
    const data = {
      // items: [
      //   {id: 0, name: 'Steak Dinner', calories: 1200},
      //   {id: 0, name: 'Cookie', calories: 400},
      //   {id: 0, name: 'Eggs', calories: 300}
      // ],
      items : StorageCtrl.getItemsFromStorage(),
      currentItem : null,
      totalCalories : 0
    }
    // Public methods
    return {
      getItems: function () {
        return data.items;

      },
      addItem : function (name, calories) {
        let ID;
        // Create ID
        if(data.items.length > 0){
          ID = data.items[data.items.length - 1].id + 1;
        } else {
          ID = 0;
        }

        // Calories to number
        calories = parseInt(calories);

        // Create new item
        newItem = new Item(ID, name, calories);

        // add item to array
        data.items.push(newItem);

        return newItem;
      },
      getItemById : function(id) { 
        let found = null ;
        // Loop throug the items
        data.items.forEach(function(item){
          if(item.id === id) {
            found = item;
          }
        });
        return found;
      },
      updateItem : function (name, calories) {
        // Caloried to number
        calories = parseInt(calories);

        let found = null ;
        data.items.forEach(function(item){
          if(item.id === data.currentItem.id){
            item.name = name;
            item.calories = calories;
            found = item;
          }
        });
        return found;
      },
      deleteItem : function (id) {
        // Get ids
        const ids = data.items.map(function(item){
          return item.id;
        });
        // Get Index
        const index = ids.indexOf(id);

        // remove item
        data.items.splice(index, 1);
      },
      clearAllItems : function () {
        data.items = [];
      },
      setCurrentItem : function (item) {
        data.currentItem = item;
      },
      getCurrentItem :function () {
        return data.currentItem;
      },
      getTotalCalories : function () {
        let total = 0;
        // Loop through items and add cals
        data.items.forEach(function(item){
          total += item.calories;
        });
        // Set total cal in data structure
        data.totalCalories = total;
        // retrun total
        return data.totalCalories;

      },
      logData : function () {
        return data;
      }
    }
  }) ();


// UI Controller
const UICtrl = (function() {

  const UISelectors = {
    itemList : '#item-list',
    listItems : '#item-list li',
    addBtn :'.add-btn',
    updateBtn : '.update-btn',
    deleteBtn : '.delete-btn',
    backBtn : '.back-btn',
    clearBtn : '.clear-btn',
    itemNameInput : '#item-name',
    itemCaloriesInput : '#item-calories',
    totalCalories: '.total-calories',
  }

  // Public methods
  return {
    populateItemList : function (items) {
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil" aria-hidden="true"></i>
        </a>
        </li>`
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput : function () {
      return {
        name : document.querySelector(UISelectors.itemNameInput).value,
        calories : document.querySelector(UISelectors.itemCaloriesInput).value,
      }
    },
    addListItem : function (item) {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add Class
      li.className = "collection-item";
      // Add ID
      li.id = `item-${item.id}`;
      // Add html
      li.innerHTML = `  <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil" aria-hidden="true"></i>
      </a>`;
      // Insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    removeItems : function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn node list into a array
      listItems = Array.from(listItems);

      listItems.forEach(function(item) {
        item.remove();
      });
    },
    updateListItem : function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn Node List into an array
      listItems = Array.from(listItems);
      listItems.forEach(function(listItem) {
        const itemID = listItem.getAttribute('id');

        if(itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil" aria-hidden="true"></i>
          </a>`;
        }
      });
    },
    deleteListItem : function (id) {
      const itemID = `#item-${id}` ;
      const item = document.querySelector(itemID);
      item.remove();
    },
    clearInput : function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value =  '' ;
    },

    addItemToForm : function () {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    hideList : function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalCalories :function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    clearEditState : function () {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inlines';
    },

    showEditState : function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    getSelectors : function () {
      return UISelectors;
    }
  }
}) ();


// App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl) {

  // Load Event Listners
  const loadEventListners = function () {
    // Get the ui selectors from ui control
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);

    // Disable submit on enter
    document.addEventListener('keypress', function (e) {
      if(e.keyCode === 13 || e.which === 13 ){
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click',itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click',itemUpdateSubmit);

    // Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click',itemDeleteSubmit);

    // Back button event
    document.querySelector(UISelectors.backBtn).addEventListener('click',UICtrl.clearEditState);

     // Clear button event
     document.querySelector(UISelectors.clearBtn).addEventListener('click',clearAllItemsClick);
  }
  
  // Add item submit
    const itemAddSubmit = function(e) {
      // Get From input from ui controller
      const input = UICtrl.getItemInput();
      
      // check for name and calorie input
      if(input.name !== '' && input.calories !== ''){
        // Add item
        const newItem = ItemCtrl.addItem(input.name, input.calories);
        //  Add item to the ui list
        UICtrl.addListItem(newItem);

         // Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        // add total calories to the ui
        UICtrl.showTotalCalories(totalCalories);

        // Store in local storage
        StorageCtrl.storeItem(newItem);
    
        // Clear fields
        UICtrl.clearInput();
      }


      e.preventDefault();
    }
    
    // Click edit item
    const itemEditClick = function (e) {
      if(e.target.classList.contains('edit-item')) {

        // Get item list id (item-0, item-1)
        const listId = e.target.parentNode.parentNode.id;

        // Break into array
        const listIdArr = listId.split('-');

        // Get the actual id
        const id = parseInt(listIdArr[1]);
       
        // Get item 
        const itemToEdit = ItemCtrl.getItemById(id);

        // Set Current item
        ItemCtrl.setCurrentItem(itemToEdit);

        // Add item to the form
        UICtrl.addItemToForm();
      }


      e.preventDefault();
    } 
    
    // Update item submit
    const itemUpdateSubmit = function (e) {
      // Get item input
      const input = UICtrl.getItemInput() ;
      // Update item
      const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
      // Update UI
      UICtrl.updateListItem(updatedItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total calories to the ui
      UICtrl.showTotalCalories(totalCalories);

      UICtrl.clearEditState();

      e.preventDefault();
    }

    // Delete button event
    const itemDeleteSubmit = function (e) {
      // Get Current item
      const currentItem = ItemCtrl.getCurrentItem();

      // Delete item from data structure
      ItemCtrl.deleteItem(currentItem.id);

      // Delete from ui
      UICtrl.deleteListItem(currentItem.id)

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total calories to the ui
      UICtrl.showTotalCalories(totalCalories);
  
      UICtrl.clearEditState();

      e.preventDefault();
    }

    const clearAllItemsClick = function () {
      // Delete all items from data structure
      ItemCtrl.clearAllItems();

       // Get total calories
       const totalCalories = ItemCtrl.getTotalCalories();
       // add total calories to the ui
       UICtrl.showTotalCalories(totalCalories);

      // Remove from ui
      UICtrl.removeItems();

      // Hide UL
      UICtrl.hideList();
       
    }

  // Public methods
  return {
    init: function () {

      // Clear edit state 
      UICtrl.clearEditState();
      // Fetch Item from data structres
      const items = ItemCtrl.getItems();
      
      // Check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        // Populate list with item
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // add total calories to the ui
      UICtrl.showTotalCalories(totalCalories);

      // Load event listners
      loadEventListners();
    }
  }
}) (ItemCtrl, StorageCtrl, UICtrl);

// Initialize App
App.init();
