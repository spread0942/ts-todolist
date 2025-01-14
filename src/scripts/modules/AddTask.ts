import { DeleteTask } from "./DeleteTask";

export class AddTask {
    // load taskfrom the cache
    static loadTask() {
        const tasksContainter = document.getElementById("app__list-tasks") as HTMLDivElement;
        // load the tasks cache
        const tasks: string[] = JSON.parse(localStorage.getItem("tasks") || "[]");

        tasksContainter.innerHTML = "";

        // add the tasks into the container
        tasks.forEach((task) => {
            AddTask.addNewTask(task);
        });
    }

    /// an handler to create button with icon
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

    /// add new task to the tasks list
    static addNewTask(taskText: string) {
        const listTasks = document.getElementById("app__list-tasks") as HTMLDivElement;

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        // create div element that will contain the button and the task text
        const firstDiv = document.createElement("div");

        // create checkbox button
        const checkboxButton = AddTask.createButton("task__checkbox", ["fa-regular", "fa-circle"]);

        // create paragraph text
        const taskParagraph = document.createElement("p");
        taskParagraph.classList.add("task__text");
        taskParagraph.textContent = taskText;

        firstDiv.appendChild(checkboxButton);
        firstDiv.appendChild(taskParagraph);

        taskDiv.append(firstDiv);

        // create div element that will contain the edit and delete buttons
        const secondDiv = document.createElement("div");
        
        const editButton = AddTask.createButton("task__edit", ["fa-solid", "fa-pen-to-square"]);
        const deleteButton = AddTask.createButton("task__delete", ["fa-solid", "fa-trash"]);
        
        deleteButton.addEventListener('click', DeleteTask.deleteTask);

        secondDiv.append(editButton);
        secondDiv.append(deleteButton);

        taskDiv.append(secondDiv);

        listTasks.append(taskDiv);
    }

    // add the new task in the cache
    static addTaskToCache(newTask: string) {
        // load the tasks cache and add the new one
        const tasks: string[] = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.push(newTask);
        // create the tasks cache
        localStorage.setItem("tasks", JSON.stringify(tasks))

        AddTask.loadTask()
    }

}
