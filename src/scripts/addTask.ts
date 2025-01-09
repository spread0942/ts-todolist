const addTaskButton = document.getElementById("task-add-button") as HTMLButtonElement;

/// an handler to create button with icon
function createButton(buttonClass: string, iconListClass: string[]): HTMLElement {
    const button = document.createElement("button");
    button.classList.add(buttonClass);

    const icon = document.createElement("i");
    iconListClass.forEach(c => {
        icon.classList.add(c);
    });

    button.appendChild(icon);

    return button;
}

/// add new task to the tasks list
function addNewTask(taskText: string) {
    const listTasks = document.getElementById("app__list-tasks") as HTMLDivElement;

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // create div element that will contain the button and the task text
    const firstDiv = document.createElement("div");

    // create checkbox button
    const checkboxButton = createButton("task__checkbox", ["fa-regular", "fa-circle"]);

    // create paragraph text
    const taskParagraph = document.createElement("p");
    taskParagraph.classList.add("task__text");
    taskParagraph.textContent = taskText;

    firstDiv.appendChild(checkboxButton);
    firstDiv.appendChild(taskParagraph);

    taskDiv.append(firstDiv);

    // create div element that will contain the edit and delete buttons
    const secondDiv = document.createElement("div");
    
    const editButton = createButton("task__edit", ["fa-solid", "fa-pen-to-square"]);
    const deleteButton = createButton("task__delete", ["fa-solid", "fa-trash"]);
    
    secondDiv.append(editButton);
    secondDiv.append(deleteButton);

    taskDiv.append(secondDiv);

    listTasks.append(taskDiv);
}

addTaskButton.addEventListener("click", () => {
    const newTaskInput = document.getElementById("task-input") as HTMLInputElement;
    const content = newTaskInput.value;
    
    if (content != "") {
        addNewTask(newTaskInput.value);

    }
});
