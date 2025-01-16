import { Task } from "./Task";

export class CacheHandler {
    // return the tasks in array forat
    static getCache(): Task[] {
        const tasksString = localStorage.getItem("tasks");
        return tasksString ? JSON.parse(tasksString).map((taskString: string) => Task.fromStringToTask(taskString)) : [];

    }

    // convert a task array in string
    static getCacheItem(tasks: Task[]): string {
        return JSON.stringify(tasks.map(task => task.toString()))
    }

    // get the last id stored from the cache
    static getLastId(): number {
        const tasks: Task[] = this.getCache();
        let newID: number = 0;

        tasks.forEach((task) => {
            newID = task.id;
        });

        return newID + 1;
    }

    // add the task in the cache
    static addTaskToCache(taskText: string): void {
        const tasks: Task[] = this.getCache();
        const id: number = this.getLastId();
        const newTask: Task = new Task(id, taskText);

        tasks.push(newTask);
        localStorage.setItem('tasks', this.getCacheItem(tasks));
    }

    // remove the task from the cache
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

    // remove the task from the cache
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
}