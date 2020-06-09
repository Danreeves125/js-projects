class UI {
    constructor() {
        this.tasks = document.querySelector('.list-group');
        this.taskInput = document.querySelector('#task');
    }
    
    addTask(task) {
        // Create li element
        const li = document.createElement('li');
        // Add Classes
        li.className = 'list-group-item';
        // Add inner html
        li.innerHTML = `
            <p>${task}</p>
            <a href="#" class="delete">
                <i class="fas fa-times-circle"></i>
            </a>
        `

        this.tasks.appendChild(li);

        this.clearInput();
    }

    deleteTask(item) {
        item.remove();
    }

    clearInput() {
        this.taskInput.value = '';
    }

    showAlert(msg, className) {
        // Create element
        const alert = document.createElement('div');
        // Add classes
        alert.className = className;
        // Create Text node
        alert.appendChild(document.createTextNode(`${msg}`));
        // Append to the card
        const taskForm = document.querySelector('#taskForm'),
              formGroup = document.querySelector('.form-group');

        taskForm.insertBefore(alert, formGroup);

        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearAllTasks() {
        this.tasks.innerHTML = '';
    }
}

