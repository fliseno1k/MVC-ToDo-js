import View from './View';

export default class Controller {
    constructor(model) {
        this.model = model;
        this.view = new View(this, this.model);
    }

    addTask(taskValue) {
        this.model.addTask(taskValue);
    }

    completeTask(taskId) {
        this.model.completeTask(taskId);
    }
}