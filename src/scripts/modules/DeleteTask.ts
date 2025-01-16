import { CacheHandler } from "./CacheHandler";
import { Logger } from "./Logger";

export class DeleteTask {
    // delete a task
    static deleteTask(event: MouseEvent) {
        const target = event.target as HTMLElement;

        const taskElement = target.closest('.task') as HTMLDivElement;

        if (taskElement) {
            const taskID: number = Number(taskElement?.getAttribute('data-id'));

            if (taskID) {
                taskElement.remove();
                CacheHandler.removeFromCache(taskID);
    
                Logger.success(`Deleted task.`);
            }

            
        }
    }
}