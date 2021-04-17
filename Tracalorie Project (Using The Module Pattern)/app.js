// Storage Controller

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
      items: [
        // {id: 0, name: 'Steak Dinner', calories: 1200},
        // {id: 0, name: 'Cookie', calories: 400},
        // {id: 0, name: 'Eggs', calories: 300}
      ],
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
    addBtn :'.add-btn',
    updateBtn : '.update-btn',
    deleteBtn : '.delete-btn',
    backBtn : '.back-btn',
    itemNameInput : '#item-name',
    itemCaloriesInput : '#item-calories',
    totalCalories: '.total-calories'
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
    clearInput : function () {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
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

    getSelectors : function () {
      return UISelectors;
    }
  }
}) ();


// App Controller
const App = (function(ItemCtrl, UICtrl) {

  // Load Event Listners
  const loadEventListners = function () {
    // Get the ui selectors from ui control
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click',itemAddSubmit);

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click',itemUpdateSubmit)
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
  
        // Clear fields
        UICtrl.clearInput();
      }


      e.preventDefault();
    }
    
    // Update item submit
    const itemUpdateSubmit = function (e) {
      if(e.target.classList.contains('edit-item')) {

        // Get item list id (item-0, item-1)
        const listId = e.target.parentNode.parentNode.id;

        // Break into array
        const listIdArr = listId.split('-');

        // Get the actual id
        const id = parseInt(listIdArr[1]);

        // Get item
        const itemToEdit = itemCtrl.getItemById(id);

        console.log(itemToEdit);
      }

      e.preventDefault();
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
}) (ItemCtrl, UICtrl);

// Initialize App
App.init();
