funtion onReady() {
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');
const toDoList = document.getElementById('toDoList');

addToForm.addEventListener();
addToForm.addEventListener('submit', () => {
  form.addEventListener( 'submit', function( ev ) {
    var text = field.value;
    if ( text !== '' ) {
      todo.innerHTML += '<li>' + text + ' <button onclick="Delete(this);">Delete</button> </li>';
      field.value = '';
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
}

function onReady () {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo(){
    if (newToDoText.value) { return; }
    
    toDos.push({
      title: nextToDoText.value,
      complete: false
    });

    newToDoText.value = ''

    renderTheUI();
  }

    function renderTheUI() {
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo) {
        const newToDo = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.textContent = toDo.title;

        toDoList.appendChild(newli);
        newLi.appendChild(checkbox);

        const title = document.createElement('span');
        title.textContent = toDo.title;

      });
    }
    addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
      newToDoText.value = '';
    });
  }
  renderTheUi();
}
window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
