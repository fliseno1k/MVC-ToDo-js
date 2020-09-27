import Observer from './Observer';
import Task from './Task';

export default class TasksModel extends Observer {
    constructor() {
        super();
        this.tasksList = [];
        setTimeout(() => this._loadTasks(), 0);
    }

    addTask(taskValueOrObject) {
        var newTask = new Task(taskValueOrObject);
        this.tasksList.push(newTask);
        this._saveTasks();
        this.notify([newTask]);
    }

    completeTask(taskId) {
        const task = this.tasksList.find(task => task.id == taskId);
        if (task.state === "complete") return;
        task.state = "complete";

        this._saveTasks();
        this.notify([task]);
    }

    getTasksList() {
        return this.tasksList();
    }

    _saveTasks() {
        localStorage.removeItem("tasks");
        localStorage.setItem("tasks", JSON.stringify(this.tasksList));
    }

    _loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        if (tasks) {
            tasks.forEach(task => {
                task.state !== "complete" ? this.addTask(task) : undefined;
            });
        }
    }
}