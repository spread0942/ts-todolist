import { CacheHandler } from "./modules/CacheHandler";

export class EditTask {
    static editTask(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const taskElement = target.closest('.task') as HTMLDivElement;
        const attribute = 'data-edit-mode'

        if (taskElement) {
            const editMode = taskElement?.getAttribute(attribute);
            const taskParagraphElement = taskElement.querySelector('.task__text') as HTMLParagraphElement;
            const inputElement = taskElement.querySelector('.task__text--input') as HTMLInputElement;

            // in edit mode
            if (editMode) {
                const newTextTask = inputElement.value;
                taskParagraphElement.innerText = newTextTask;

                inputElement.style.display = "none";
                taskParagraphElement.style.display = "";

                taskElement.removeAttribute(attribute);

                const taskID: number = Number(taskElement?.getAttribute('data-id'));

                if (taskID) {
                    CacheHandler.updateTaskTextCache(taskID, newTextTask);
                }
            } else {
                const oldTextTask = taskParagraphElement.innerText;
                inputElement.value = oldTextTask;

                taskParagraphElement.style.display = "none";
                inputElement.style.display = "";

                taskElement.setAttribute(attribute, "true");
            }
            
        }
    }
}