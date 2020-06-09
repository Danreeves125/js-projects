const ui = new UI();
const store = new Storage();

const taskForm = document.querySelector('#taskForm'),
      taskInput = document.querySelector('#task'),
      clearTasks = document.querySelector('#clearTasks'),
      deleteButton = document.querySelector('.delete'),
      listGroup = document.querySelector('.list-group');

// Load content
document.addEventListener('DOMContentLoaded', Storage.getAllTasks());

taskForm.addEventListener('submit', (e) => {
    if(taskInput.value != '') {
        ui.addTask(taskInput.value);
        Storage.storeInLocalStorage(taskInput.value);
        ui.clearInput();
    } else {
        ui.showAlert('Please enter a task', 'alert alert-danger');
    }
    e.preventDefault();
});

listGroup.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('delete')) {
        ui.deleteTask(e.target.parentElement.parentElement);
        
        Storage.removeFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);
        ui.showAlert('Task Removed', 'alert alert-success');
    }
});

clearTasks.addEventListener('click', () => {
    if(confirm('Are you sure you want to delete all tasks')) {
        ui.clearAllTasks();
        Storage.clearLocalStorage();
        ui.showAlert('All Tasks have been deleted', 'alert alert-success');
    }
});


