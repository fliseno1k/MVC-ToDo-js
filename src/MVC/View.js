export default class View {
    constructor(controller, model) {
        this.controller = controller;
        model.addObserver(this);

        this.registerDOMElements()
            .setupHandlers();
    }

    registerDOMElements() {
        this.taskInput = document.querySelector(".tasks__input input");
        this.tasksList = document.querySelector(".tasks__list");
        return this;
    }

    setupHandlers() {
        document.addEventListener("keydown", (e) => {
            if (document.activeElement === this.taskInput
                && (e.which === 13 || e.keyCode === 13)) {
                let value = this.taskInput.value;
                this.controller.addTask(value);
                this.clearInput();
            }
        });

        this.tasksList.addEventListener("click", (e) => {
            if (e.target.classList.contains("task")) {
                this.controller.completeTask(e.target.id);
            }
        });

        return this;
    }

    completeTask(task) {
        const taskElement = this.tasksList.querySelector(`#${task.id}`);
        taskElement.classList.add("task_complete");
        this.sortTasks();
    }

    clearInput() {
        this.taskInput.value = "";
    }

    renderTask(task) {
        var taskElement = document.createElement("li");
        var classlist = `task${task.state === "complete" ? " task_complete" : ""} shadow`;
        taskElement.id = task.id;
        taskElement.classList.add(...classlist.split(" "));
        taskElement.innerText = task.value;

        this.tasksList.insertAdjacentElement("afterbegin", taskElement);    
        this.sortTasks();
    }

    sortTasks() {
        return;
    }

    _moveToBottom(element) {
        return;
    }   

    update(data) {
        data.forEach(task => {
            let element = this.tasksList.querySelector(`#${task.id}`);
            if (element) {
                task.state === "complete" 
                    ? this.completeTask(task)
                    : undefined;
            } else {
                this.renderTask(task);
            }
        });
    } 
}