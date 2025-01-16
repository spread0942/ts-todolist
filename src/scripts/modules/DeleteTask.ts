import { CacheHandler } from "./CacheHandler";
import { Logger } from "./Logger";

export class DeleteTask {
    /**
     * Remove a task from the cache and also in the view
     * 
     * @param event 
     */
    static deleteTask(event: MouseEvent) {
        const target = event.target as HTMLElement;

        const taskElement = target.closest('.task') as HTMLDivElement;

        if (taskElement) {
            taskElement.remove();
            
            const taskID: number = Number(taskElement?.getAttribute('data-id'));

            if (taskID) {
                CacheHandler.removeFromCache(taskID);
    
                Logger.success(`Deleted task.`);
            }

            
        }
    }
}