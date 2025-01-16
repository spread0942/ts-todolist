import { Task } from "./Task";

export class CacheHandler {
    /**
     * Return the tasks in array format
     * 
     * @returns 
     */
    static getCache(): Task[] {
        const tasksString = localStorage.getItem("tasks");
        return tasksString ? JSON.parse(tasksString).map((taskString: string) => Task.fromStringToTask(taskString)) : [];

    }

    /**
     * Convert a task array in string
     * 
     * @param tasks 
     * @returns 
     */
    static getCacheItem(tasks: Task[]): string {
        return JSON.stringify(tasks.map(task => task.toString()))
    }

    /**
     * Get the last id stored from the cache
     * 
     * @returns 
     */
    static getLastId(): number {
        const tasks: Task[] = this.getCache();
        let newID: number = 0;

        tasks.forEach((task) => {
            newID = task.id;
        });

        return newID + 1;
    }

    /**
     * Add the task in the cache
     * 
     * @param taskText 
     */
    static addTaskToCache(taskText: string): void {
        const tasks: Task[] = this.getCache();
        const id: number = this.getLastId();
        const newTask: Task = new Task(id, taskText);

        tasks.push(newTask);
        localStorage.setItem('tasks', this.getCacheItem(tasks));
    }

    /**
     * Remove the task from the cache
     * 
     * @param taskID 
     */
    static removeFromCache(taskID: number): void {
        const tasks: Task[] = this.getCache();
        let i = -1;
        
        tasks.forEach((task:Task, index: number) => {
            if (task.id === taskID) {
                i = index;
                return;
            }
        });

        if (i > -1) {
            tasks.splice(i, 1);
            localStorage.setItem("tasks", this.getCacheItem(tasks));
        }
    }

    /**
     * Remove the task from the cache
     * 
     * @param taskID 
     */
    static setCheckOrUncheckToCache(taskID: number): void {
        const tasks: Task[] = this.getCache();

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === taskID) {
                tasks[i].checked = !tasks[i].checked;
                break;
            }
        }

        localStorage.setItem("tasks", this.getCacheItem(tasks));
    }

    static updateTaskTextCache(taskID: number, newTaskText: string): void {
        const tasks: Task[] = this.getCache();

        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id === taskID) {
                tasks[i].text = newTaskText;
                break;
            }
        }

        localStorage.setItem("tasks", this.getCacheItem(tasks));
    }
}