const todoList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', function() {
  // Get the value from the input field
  const newTaskText = newTaskInput.value.trim();

  // Check if the task is empty
  if (newTaskText) {
    // Create a new list item (`<li>`) for the task
    const newListItem = document.createElement('li');
    newListItem.textContent = newTaskText;

    // Add the new list item to the to-do list
    todoList.appendChild(newListItem);

    // Clear the input field for the next task
    newTaskInput.value = '';
  }
});

