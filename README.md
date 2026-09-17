# Task Tracker ✅

A responsive task management application built with **HTML, CSS, and JavaScript**.

The app allows users to create, organise, search, and manage tasks with priority levels and a dark mode interface.

The project focuses on a clean, responsive interface while demonstrating DOM manipulation, application state management, modular JavaScript, and Local Storage.

---

## 🚀 Live Demo

👉 **[View the live application](https://zireael06.github.io/Todo-App/)**

---

## Features

- Add, edit, delete, and complete tasks
- Search tasks and filter by status
- High, medium, and low priority levels
- Persistent dark mode
- Local Storage persistence
- Responsive layouts
- Accessible buttons and form labels

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 modules)
- Local Storage API
- Font Awesome Icons

---

## Key Skills Demonstrated

- Semantic HTML
- Responsive CSS with Flexbox and custom properties
- Modular JavaScript architecture
- DOM manipulation and event-driven programming
- Application state management
- Factory pattern implementation
- Local Storage integration
- Search, filtering, and accessibility

---

## Getting Started

1. Clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.

No additional dependencies or installation are required.

---

## How It Works

Task data, application state, storage, and rendering logic are separated into dedicated modules. When a task is added, edited, completed, or deleted, the state updates, changes are saved to Local Storage, and the interface re-renders.

---

## Screenshots

### Main Interface

![Task Tracker Main Screenshot](screenshots/task-tracker-main.png)

### Dark Mode

![Task Tracker Dark Mode Screenshot](screenshots/task-tracker-dark-mode.png)

---

## Future Improvements

- Due dates
- Task categories
- Drag-and-drop sorting
- Improved inline editing
- Task completion animations
- Priority sorting

---

## Project Structure

```text
task-tracker/
├── index.html
├── styles.css
├── README.md
├── js/
│   ├── app.js
│   ├── dom.js
│   ├── filters.js
│   ├── priority.js
│   ├── render.js
│   ├── state.js
│   ├── storage.js
│   ├── taskElement.js
│   ├── taskFactory.js
│   ├── taskFilters.js
│   ├── tasks.js
│   ├── theme.js
│   └── ui.js
└── screenshots/
    ├── task-tracker-dark-mode.png
    └── task-tracker-main.png
```

---

## Author

Created by **Tim Baker**.

Built to demonstrate modular JavaScript, state management, Local Storage, responsive design, and accessibility.
