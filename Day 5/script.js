class Task {
    constructor(task) {
        this.task = task;
    }
}

class UserInterface {
    constructor() {
        this.buttonInput = document.getElementById("add-task-button");
        this.taskInput = document.getElementById("task");
        this.table = document.getElementById("table");
        this.tableBody = document.getElementById("table-body");
        this.tasks = []; 
    }

    bindEventListeners() {
        this.buttonInput.addEventListener('click', (event) => {
            this.addTask(event);  
        })
    }

    createBadge(badge) {
        badge.classList.add('badge');
        badge.classList.add('text-bg-danger');
        badge.setAttribute('id', 'badge' + (this.tasks.length - 1));
    }

    createButton(action) {
        action.setAttribute('type', 'checkbox');
        action.classList.add('form-check-input');
    }

    addTask() {
        // create a new Task object
        const newTask = new Task(this.taskInput.value);
        this.tasks.push(newTask);
        // create row
        const newRow = document.createElement('tr');
        // create task column
        const task = document.createElement('td');
        // create completed column
        const colCompleted = document.createElement('td');
        const newBadge = document.createElement('span');
        this.createBadge(newBadge);
        //create action column
        const action = document.createElement('td');
        const actionButton = document.createElement('input');
        this.createButton(actionButton);
        // make task column a child of the new row
        newRow.appendChild(task);
        // make badge a child of the completed column
        colCompleted.appendChild(newBadge);
        // make completed column a child of the new row
        newRow.appendChild(colCompleted);
        // make the checkbox a child of the action column
        action.appendChild(actionButton);
        // make the action column a child of the new row
        newRow.appendChild(action);

        task.innerHTML = newTask.task;
        newBadge.innerHTML = 'Incomplete';

        this.tableBody.append(newRow);

        actionButton.addEventListener('click', (event) => {
            // document.getElementById(newBadge.getAttribute('id')).remove();
            newBadge.classList.remove('text-bg-danger');
            newBadge.classList.add('text-bg-success');
            newBadge.innerHTML = 'Complete!';
        })
    }
}

const ui = new UserInterface();
ui.bindEventListeners();

