document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // output: <button id="myButton">Change Text</button>
});

document.getElementById("myButton").addEventListener("click", () => {
  console.log(this); // output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
});

// The arrow function does not have its own 'this' context; it inherits 'this' from the enclosing lexical scope, which is the global window object in this case.
// The regular function has its own 'this' context, which refers to the element that triggered the event (the button in this case).

// Example 1: Accessing DOM Elements
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").innerText =
      "The text has been changed!";
  });

// Example 2: Traversing the DOM
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("citiesList");
    cityList.firstElementChild.classList.add("highlight");
  });

// Example 3: Manipulating DOM Elements
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.fontWeight = "bold";
  coffeeType.style.color = "maroon";
  coffeeType.style.backgroundColor = "skyblue";
});

// Example 4: Creating and Inserting DOM Elements
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Coffee";

  document.getElementById("shoppingList").appendChild(newItem);
});

// Example 5: Removing DOM Elements
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    //taskList.removeChild(taskList.lastElementChild); // Alternative method
    taskList.lastElementChild.remove();
  });

// Example 6: Event Handling in the DOM
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Button was clicked!");
});

// Example 7: Event Delegation
document.getElementById("tealist").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// Example 8: Form Handling
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").innerText = feedback;
  });

// Example 9: DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM is fully loaded";
});

// Example 10:  CSS Classes Manipulation
let clicked = false;
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let el = document.getElementById("descriptionText");

    //el.classList.toggle("highlight");

    // another way:
    if (!clicked) {
      el.classList.add("highlight");
      clicked = true;
    } else {
      el.classList.remove("highlight");
      clicked = false;
    }
  });
