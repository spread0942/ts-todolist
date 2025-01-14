import { Logger } from "./Logger";

export class DeleteTask {
    static deleteTask(event: MouseEvent) {
        console.log("Ohoo");
        const target = event.target as HTMLElement;

        const taskElement = target.closest('.task') as HTMLDivElement;

        if (taskElement) {
            const taskParagraphElement = taskElement.querySelector('.task__text') as HTMLParagraphElement;

            taskElement.remove();
            DeleteTask.removeFromCache(taskParagraphElement.innerText);

            Logger.success(`Deleted task: '${taskParagraphElement.innerText}'.`);
        }
    }

    static removeFromCache(taskToRemove: string): void {
        const tasks: string[] = JSON.parse(localStorage.getItem("tasks") || "[]");
        const taskIndex: number = tasks.indexOf(taskToRemove);

        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        
    }
}