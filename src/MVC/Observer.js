export default class Observer {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        let i = this.observers.indexOf(observer);
        if (i === -1) {
            this.observers.push(observer);
        } else {
            this.observers.splice(i, 1);
            this.observers.push(observer);
        }
    }

    removeObserver(observer) {
        let i = this.observers.indexOf(observer);
        if (i !== -1) {
            this.observers.splice(i, 1);
        }
    }

    notify(data) {
        this.observers.forEach(obs => {
            obs.update(data);
        });
    }
}