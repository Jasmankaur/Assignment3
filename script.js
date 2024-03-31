// script.js
document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const tasksList = document.getElementById('tasks');
  
    addBtn.addEventListener('click', function() {
      const taskText = todoInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        todoInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const taskItem = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          taskItem.classList.add('completed');
          tasksList.appendChild(taskItem);
        } else {
          taskItem.classList.remove('completed');
          tasksList.prepend(taskItem);
        }
      });
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        taskItem.remove();
      });
  
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteBtn);
  
      tasksList.appendChild(taskItem);
    }
  });
  