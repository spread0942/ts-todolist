import { DeleteTask } from "./DeleteTask";
import { ToggleCheckBox } from "./CheckUncheckTask";
import { Task } from "./Task";
import { CacheHandler } from "./CacheHandler";

export class AddTask {
    /**
     * Load taskfrom the cache
     */
    static loadTask() {
        const tasksContainter = document.getElementById("app__list-tasks") as HTMLDivElement;
        // load the tasks cache
        const tasks: Task[] = CacheHandler.getCache();

        tasksContainter.innerHTML = "";

        // add the tasks into the container
        tasks.forEach((task) => {
            AddTask.addTask(task);
        });
    }

    /**
     * An handler to create button with icon
     * 
     * @param buttonClass 
     * @param iconListClass 
     * @returns 
     */
    static createButton(buttonClass: string, iconListClass: string[]): HTMLElement {
        // create the button
        const button = document.createElement("button");
        button.classList.add(buttonClass);

        // create the icon
        const icon = document.createElement("i");
        iconListClass.forEach(c => {
            icon.classList.add(c);
        });

        button.appendChild(icon);

        return button;
    }

    /**
     * Add new task to the tasks list
     * 
     * @param task 
     */
    static addTask(task: Task) {
        const listTasks = document.getElementById("app__list-tasks") as HTMLDivElement;

        const taskDiv = document.createElement("div");

        taskDiv.classList.add("task");
        taskDiv.setAttribute('data-id', String(task.id));

        // create div element that will contain the button and the task text
        const firstDiv = document.createElement("div");

        // create checkbox button
        let checkboxButton;

        if (task.checked) {
            checkboxButton = this.createButton("task__checkbox", ["fa-regular", "fa-circle-check"]);
        } else {
            checkboxButton = this.createButton("task__checkbox", ["fa-regular", "fa-circle"]);
        }

        checkboxButton.addEventListener('click', ToggleCheckBox.checkUncheck);

        // create paragraph text
        const taskParagraph = document.createElement("p");
        taskParagraph.classList.add("task__text");

        if (task.checked) {
            taskParagraph.classList.add("checked");
        }

        taskParagraph.textContent = task.text;

        firstDiv.appendChild(checkboxButton);
        firstDiv.appendChild(taskParagraph);

        taskDiv.append(firstDiv);

        // create div element that will contain the edit and delete buttons
        const secondDiv = document.createElement("div");
        
        const editButton = this.createButton("task__edit", ["fa-solid", "fa-pen-to-square"]);
        const deleteButton = this.createButton("task__delete", ["fa-solid", "fa-trash"]);
        
        deleteButton.addEventListener('click', DeleteTask.deleteTask);

        secondDiv.append(editButton);
        secondDiv.append(deleteButton);

        taskDiv.append(secondDiv);

        listTasks.append(taskDiv);
    }

    /**
     * Add the new task in the cache
     * 
     * @param newTextTask 
     */
    static addNewTaskToCache(newTextTask: string) {
        // load the tasks cache and add the new one
        CacheHandler.addTaskToCache(newTextTask);
        this.loadTask();
    }

}
