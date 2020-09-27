import './style.css';

import TasksModel from './MVC/TasksModel';
import Controller from './MVC/Controller';

const app = () => {
    new Controller(new TasksModel());
}

app();