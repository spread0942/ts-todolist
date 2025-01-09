const app = document.getElementById("app") as HTMLBodyElement;
const container = document.getElementById("container") as HTMLDivElement;
const listTasks = document.getElementById("app__list-tasks") as HTMLDivElement;

function setApplicationSize() {
    const height = window.innerHeight;

    if (app) {
        app.style.height = `${height}px`;
    }

    if (container) {
        container.style.height = `${height}px`;
    }

    if (listTasks) {
        listTasks.style.height = `${height / 3}px`;
    }
}

setApplicationSize();

window.addEventListener("resize", setApplicationSize);
