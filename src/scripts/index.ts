import { Logger } from "./modules/Logger";
import { AddTask } from "./modules/AddTask";

const app = document.getElementById("app") as HTMLBodyElement;
const container = document.getElementById("container") as HTMLDivElement;
const listTasks = document.getElementById("app__list-tasks") as HTMLDivElement;
const addTaskButton = document.getElementById("task-add-button") as HTMLButtonElement;

// add new task event
addTaskButton.addEventListener("click", () => {
    const newTaskInput = document.getElementById("task-input") as HTMLInputElement;
    const content = newTaskInput.value;
    
    if (content != "") {
        AddTask.addTaskToCache(newTaskInput.value);
        Logger.success("Added a new task! 😁")
    }
    else {
        Logger.error("Task can't be empty. 😑");
    }
});

// this function set the application size
function setApplicationSize() {
    const height = window.innerHeight;

    if (app) {
        app.style.height = `${height}px`;
    }

    if (container) {
        container.style.height = `${height}px`;
    }

    if (listTasks) {
        listTasks.style.height = `${height / 3}px`;
    }
}

setApplicationSize();

window.addEventListener("resize", setApplicationSize);
window.onload = AddTask.loadTask;

