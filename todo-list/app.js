const ui = new UI();

const taskForm = document.querySelector('#taskForm'),
      taskInput = document.querySelector('#task'),
      clearTasks = document.querySelector('#clearTasks');

taskForm.addEventListener('submit', (e) => {
    if(taskInput.value != '') {
        ui.addTask(taskInput.value);
    } else {
        ui.showAlert('Please enter a task', 'alert alert-danger');
    }
    e.preventDefault();
});