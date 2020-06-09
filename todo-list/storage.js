class Storage {

    static getTasks() {
        let tasks;

        if(localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        return tasks;
    }

    static storeInLocalStorage(task) {
        const tasks = Storage.getTasks();
        
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static getAllTasks() {
        const tasks = Storage.getTasks();

        tasks.forEach((task) => {
            const ui = new UI();

            // Add tasks to ui
            ui.addTask(task);
        });
    }

    static removeFromLocalStorage(taskItem) {
        const tasks = Storage.getTasks();

        tasks.forEach((task, index) => {
            if(taskItem === task) {
                tasks.splice(index, 1);
            }

        });
        
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static clearLocalStorage() {
        localStorage.clear();
    }
}