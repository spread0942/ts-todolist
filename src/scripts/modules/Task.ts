export class Task {
    id: number;
    text: string;
    checked: boolean;

    constructor(id: number, text: string, checked: boolean = false) {
        if (id < 1)
            throw new Error("Invalid id number,must be higher then 0");

        this.id = id;
        this.text = text;
        this.checked = checked;
    }

    toString(): string {
        return JSON.stringify({
            id: this.id,
            text: this.text,
            checked: this.checked
        })
    }

    // convert a string in JSON format to Task entity
    static fromStringToTask(taskString: string) : Task {
        const taskJson: Record<string, any> = JSON.parse(taskString);

        return new Task(Number(taskJson.id), String(taskJson.text), Boolean(taskJson.checked));
    }
}