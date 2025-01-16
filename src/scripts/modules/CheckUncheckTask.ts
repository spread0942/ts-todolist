import { CacheHandler } from "./CacheHandler";

export class ToggleCheckBox {
    static checkUncheck(event: MouseEvent) {
        const target = event.target as HTMLElement;
        const taskElement = target.closest('.task') as HTMLDivElement;
        const checkedClass = "checked";

        if (taskElement) {
            const taskParagraphElement = taskElement.querySelector('.task__text') as HTMLParagraphElement;
            const checkButton = taskElement.querySelector('.task__checkbox') as HTMLButtonElement;
            const iconButton = checkButton.querySelector('i') as HTMLElement;

            // check or uncheck the the icon and the paragraph
            if (taskParagraphElement.classList.contains(checkedClass)) {
                taskParagraphElement.classList.remove(checkedClass);

                iconButton.className = '';
                iconButton.classList.add('fa-regular', 'fa-circle');
            } else {
                taskParagraphElement.classList.add(checkedClass);

                iconButton.className = '';
                iconButton.classList.add('fa-regular', 'fa-circle-check');
            }

            const taskID: number = Number(taskElement?.getAttribute('data-id'));

            if (taskID) {
                CacheHandler.setCheckOrUncheckToCache(taskID);
                console.log("ok");
            }

        }
    }
}