// declaring variable: querySelector Method
  const itemInput = document.querySelector("#itemInput")
  const submitButton = document.querySelector("#submitButton");
  const clearItems = document.querySelector(".clear-items");
  const form = document.querySelector(".form-container");
  const independentContainer = document.querySelector(".independent-container");
  const majorContainer = document.querySelector(".major-content-container");
  const outputDisplay = document.querySelector(".output-alert");
  const targetItem = document.querySelector(".unordered-item-list > ul:nth-child(1) > li:nth-child(1)");
  
// edit option
  let editElement;
  let editingFlag = false;
  let editID = "";

// event listeners
  submitButton.addEventListener("click", addItem)
// clear items event listeners
  clearItems.addEventListener("click", clearItem);
// load Items
window.addEventListener("DOMContentLoaded", setupItem);
// functions
  function addItem(eventObject) {
    eventObject.preventDefault();
    const value = itemInput.value

// generate unique number for local storage using Date object
  const uniqueId = new Date().getTime();
  if (value  && !editingFlag) {
    createListItem(uniqueId, value)
  //   // display output
    displayOutput("Item added to the list", "success");
    // show container
    majorContainer.classList.add("show-container");
    // add to local storage
    addToLocalStorage(uniqueId, value);
    // set back to default
    setBackToDefault();
  } else if (value  && editingFlag) {
    editElement.textContent = value;
    displayOutput("value changed", "success");
    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayOutput("Please Enter Value", "danger");
  }
};

// display Output
  function displayOutput(text, action) {
    outputDisplay.textContent = text;
    outputDisplay.classList.add(`output-alert-${action}`);
  // remove alert within a specific period 
  setTimeout(function removeOutputDisplay() {
    outputDisplay.textContent = "";
    outputDisplay.classList.remove(`output-alert-${action}`)
  }, 1000);
  };

//  function clear Items list
 function clearItem() {
  const itemList = document.querySelectorAll(".unordered-item-list");
  if(itemList.length > 0){
   itemList.forEach(function(item){
     independentContainer.removeChild(item);
   })
  };
  majorContainer.classList.remove("show-container");
    displayOutput("empty list", "danger");
    setBackToDefault();
     localStorage.removeItem("targetItem");
  };

// delete Item function
  function deleteItem(eventObject) {
    const element = eventObject.currentTarget.parentElement.parentElement;
    const uniqueId = element.dataset.uniqueId;
    independentContainer.remove(element);
    if(majorContainer.children.length === 0){
      majorContainer.classList.remove("show-container");
    }
    displayOutput("item removed", "danger");
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(uniqueId);
  };

// edit items function
  function editItem(eventObject) {
  const element = eventObject.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = eventObject.currentTarget.parentElement.parentElement;
  // set form value
  itemInput.value = editElement.textContent;
  editingFlag = true;

  editID = element.dataset.id;
  submitButton.value = "edit";
  };

// set back to default
  function setBackToDefault() {
    itemInput.value = ""; 
    editingFlag = false;
    editID = "";
    submitButton.value = "submit";
    console.log("set back to default"); 
  };

// local storage
  function addToLocalStorage(uniqueId, value){
    const listGroup = {uniqueId:uniqueId, value:value};
    // let items = localStorage.getItems("targetItem");
     let items = localStorage.getItem("targetItem")? JSON.parse(localStorage.getItem("targetItem")) : [];
     console.log(items);
     items.push(listGroup);
    localStorage.setItem("targetItem", JSON.stringify(items));
    
    //console.log("added to local storage")
  };
  function removeFromLocalStorage(uniqueId) {
    let items = getLocalStorage();

    items = items.filter(function(item){
      if(item.uniqueId !== uniqueId){
        return item;
      }
    })
    localStorage.setItem("targetItem", JSON.stringify(items));
  };
  function editLocalStorage(uniqueId, value){
    let items = getLocalStorage();
    items = items.map(function(item){
      if(item.uniqueId === uniqueId){
        itemInput.value = value ;
      }
      return item;
    })
    localStorage.setItem("targetItem", JSON.stringify(items));
  };
  function getLocalStorage(){
    return localStorage.getItem("targetItem")? JSON.parse(localStorage.getItem("targetItem")) : [];
  };
// localStorage API
// setItem
// getItem
// removeItem
//save as strings
  // localStorage.setItem("orange", JSON.stringify(["item1", "item2"]));
  // const oranges =  JSON.parse(localStorage.getItem("orange"));
  // console.log(oranges);
  // localStorage.removeItem("orange");
// ===== setup items   ====
  function setupItem() {
    let items = getLocalStorage();
    if(items.length > 0){
      items.forEach(function(item) {
        createListItem(item.uniqueId, item.value)
      })
      majorContainer.classList.add("show.container");
    }
  };

  function createListItem(uniqueId, value) {
    // create element
   const element = document.createElement("div");
   // add class
   element.classList.add("unordered-item-list");
   // add id
   let attr  = document.createAttribute("data-id");
   attr.value = uniqueId;
   element.setAttributeNode(attr);
   element.innerHTML = `
    <ul>
      <li>${value} 
        <div class="button-container"> 
        <input type ="button" class= "edit-button" value = "Edit Item"> 
        <input type ="button" class= "delete-button" value = "Delete Item"> 
        </div>
      </li>
    </ul>
    `;
    // this is where we can set those functions
     const deleteButton = element.querySelector(".delete-button");
     deleteButton.addEventListener("click", deleteItem);
     const editButton = element.querySelector(".edit-button");
     editButton.addEventListener("click", editItem);
    // append child 
    independentContainer.appendChild(element);
  }

/* ==========     Exercise  ========== */
// select class characters with document.querySelector
// const findCharacters = document.querySelectorAll(".characters");
// console.log(findCharacters);
// // select class humans from class characters
// const findHuman = document.querySelector(".humans");
// console.log(findHuman);
// // select all humans with querySelectorAll, starting from humans
// const findHumanAgain = document.querySelectorAll(".humans");
// const allHumans = findHumanAgain[0].children;
// console.log(findHumanAgain[0]);
// console.log(allHumans);
// // select all hobbit with children
// const findHobbits = document.querySelector(".hobbits")
// console.log(findHobbits);
// console.log((document.querySelectorAll(".hobbits")[0].children));
// // Select the Merry (the hobbit)
// console.log(findHobbits.children[2]);
// // Select .enemies from Sauron
// const findEnemies = document.querySelector(".enemies");
// console.log(findEnemies.children[0].parentElement);
// // Select the .characters div from Nazgûl
// console.log(findEnemies.children[1].parentElement.parentElement);
// // Select Elrond from Glorfindel
// const findElves = document.querySelector(".elves");
// console.log(findElves);
// const selectingElrond = findElves.children;
// console.log(selectingElrond); //returns HTML collection
// const cherrypickingElrond = findElves.children[2];
// console.log(cherrypickingElrond); //return the element
// console.log(cherrypickingElrond.previousElementSibling);
// // Select Legolas from Glorfindel
// const selectingGlorfindel = cherrypickingElrond ;
// console.log(selectingGlorfindel.previousElementSibling.previousElementSibling);

// // Select Arwen from Glorfindel
// console.log(findElves.children[1].nextElementSibling.nextElementSibling);