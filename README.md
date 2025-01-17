# ToDo List Application

A simple ToDo List application built with TypeScript, Webpack, HTML, and CSS. This project allows users to add, delete, and mark tasks as complete, providing a clean and responsive UI.

## Features

- Add new tasks to the ToDo list.
- Mark tasks as complete.
- Remove tasks from the list.

## Technologies Used

- **TypeScript**: For type safety and modern JavaScript features.
- **Webpack**: For bundling the application and managing dependencies.
- **HTML**: For structuring the application content.
- **CSS**: For styling the application and making it responsive.

## Prerequisites

To run this project locally, you need to have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   cd todo-list-app
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Build

To create a production-ready build of the application, use:

```bash
npm run build
```

This will bundle the application using Webpack and output the files into the `dist/` directory.

## Usage

1. Add a new task by typing into the input field and pressing the **Enter** key or clicking the **Add Task** button.
2. Mark a task as complete by clicking the checkbox next to the task.
3. Remove a task by clicking the **Delete** button next to the task.

## File Structure

```
/todo-list-app
|-- /dist             # Production-ready bundled files
|-- /src              # Source code
|   |-- /fonts        # Fonts
|   |-- /styles       # CSS files
|   |-- /ts           # TypeScript files
|   |-- index.html    # Main HTML file
|-- package-lock.json # Project metadata and dependencies
|-- package.json      # Project metadata and dependencies
|-- webpack.config.js # Webpack configuration
|-- tsconfig.json     # TypeScript configuration
```

---
