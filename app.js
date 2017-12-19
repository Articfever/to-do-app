funtion onReady() {
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');

addToForm.addEventListener();
addToForm.addEventListener('submit', () => {
event.preventDefailt();

//get the text
let title = newToDoText.value;

//create a new li
let newLi = document.createElement('li');

//create a new input
let checkbox = document.create.Element('input');

//set the input's type to check box
checkbox.type = "checkbox";

//set the title
newLi.textContent = title;

//attach the checkbox to the li
newLi.appendChild(checkbox);

//attach the li to the ul
toDoList.appendChild(newLi);

//empty the input
newToDoText = '';

});
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
