var generateUniqueId = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

export default class Task {
    constructor(task) {
        // typeof task = "string" || taskOBject
        if (typeof task === "string") {
            this.id = generateUniqueId();
            this.state = "active";
            this.value = task;
        } else {
            this.id = task.id;
            this.state = task.state;
            this.value = task.value;
        }
    }
}