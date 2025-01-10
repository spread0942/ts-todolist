export class Logger {
    // help you write a message log
    static writeLog(message: string, colorStatus: string): void {
        const logDiv = document.getElementById("app__log") as HTMLDivElement;
        const logParagraph = document.getElementById("app__log--text") as HTMLParagraphElement;

        logDiv.style.borderWidth = "1px";
        logDiv.style.borderStyle = "solid";
        logDiv.style.borderRadius = "5px";

        logDiv.style.borderColor = colorStatus;
        logParagraph.style.color = colorStatus;

        logParagraph.innerText = message;
    }

    // write a positive message
    static success(message: string): void {
        const successColor = " #65e674";
        this.writeLog(message, successColor);
    }

    // write a negative message
    static error(message: string): void {
        const errorColor = " #E50000";
        this.writeLog(message, errorColor);
    }
}