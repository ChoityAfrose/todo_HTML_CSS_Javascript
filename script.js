const todoForm = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')

// Store todos in an array
let todos = [];

// function to render todos dynamically
function renderTodos(){
    todoList.innerHTML = "";

    // Loop through todos 
    todos.forEach((todo, index) => {
        // Create <li> elements
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center shadow-sm border-0 px-3 py-2 rounded-3 mt-2';
        li.textContent = todo;

        // Create Delete button 
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-outline-danger btn-sm px-3';
        deleteBtn.textContent = 'delete';

        // Create Update Button
        const updateBtn = document.createElement('button');
        updateBtn.className = 'btn btn-outline-primary btn-sm px-3 me-2';
        updateBtn.textContent = 'Update';

        // // Append li to ui
        todoList.appendChild(li);

        const btnGroup = document.createElement('div');
        btnGroup.className = 'd-flex gap-2'
        btnGroup.appendChild(updateBtn);
        btnGroup.appendChild(deleteBtn);

        
        li.innerHTML = ''; // Clear the text if needed
        li.append(todo);   // Add the todo text manually if using textContent before
        li.appendChild(btnGroup);

        updateBtn.addEventListener( 'click',()=>{
        updateTodo(index);
        });

        deleteBtn.addEventListener( 'click',()=>{
        deleteTodo(index);
        });

    });   
}
// function for add todo
function addToDo(todoText){
    if(todoText.trim()==='') return; //prevent empty todos
    todos.push(todoText.trim())
    renderTodos();
    todoInput.value = '';
}
//function for update todo
function updateTodo(index) {
  const updated = prompt("Edit your todo:", todos[index]);
  if (updated !== null && updated.trim() !== "") {
    todos[index] = updated.trim();
    renderTodos();
  }
}
//function for delete todo
function deleteTodo(index){
    todos.splice(index,1);
    renderTodos();
}

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addToDo(todoInput.value);

});
