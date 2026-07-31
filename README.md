# Task Tracker ✅

A responsive task management application built using **HTML, CSS, and JavaScript**.

The app allows users to create, organise, search, and manage tasks with priority levels and a dark mode interface.

The project focuses on building a clean, responsive user interface while demonstrating core JavaScript concepts such as DOM manipulation, application state management, and Local Storage.

---

## 🚀 Live Demo

👉 **[View the live application](https://zireael06.github.io/Todo-App/)**

---

## Features

✅ Add new tasks  
✅ Edit existing tasks  
✅ Delete tasks  
✅ Mark tasks as completed  
✅ Search through tasks  
✅ Filter tasks by status:
- All
- Active
- Completed

✅ Priority system:
- High
- Medium
- Low

✅ Dark mode toggle  
✅ Saves tasks using Local Storage  
✅ Responsive design for different screen sizes  
✅ Accessible buttons and form labels  

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Local Storage API
- Font Awesome Icons

---

## Key Skills Demonstrated

- Semantic HTML5
- Responsive CSS with Flexbox
- CSS custom properties (variables)
- Dark mode implementation
- JavaScript ES6 modules
- Modular application architecture
- DOM manipulation
- Event-driven programming
- Application state management
- Factory pattern implementation
- Local Storage integration
- Search and filtering functionality
- Accessibility best practices
- Git and GitHub workflow

---

## Getting Started

1. Clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.

No additional dependencies or installation are required.

---

## How It Works

Tasks are managed through a modular JavaScript architecture where task data, application state, storage, and rendering logic are separated into dedicated modules.

When a task is added, edited, completed, or deleted:

1. The task data updates
2. Changes are saved to Local Storage
3. The interface re-renders to show the latest data

This means tasks remain available even after refreshing the page.

---

## Screenshots

### Main Interface

![Task Tracker Main Screenshot](screenshots/task-tracker-main.png)

### Dark Mode

![Task Tracker Dark Mode Screenshot](screenshots/task-tracker-dark-mode.png)

---

## Future Improvements

Possible features to add:

- Due dates
- Task categories
- Drag and drop sorting
- Better inline editing
- Task completion animations
- Priority sorting

---

## Project Structure

```text
task-tracker/
├── index.html
├── styles.css
├── README.md
│
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
│
└── screenshots/
    ├── task-tracker-dark-mode.png
    └── task-tracker-main.png
```

---

## Author

Created by **Tim Baker**

This project was built to practise modern JavaScript development, including DOM manipulation, modular architecture, state management, Local Storage, responsive design, and accessibility.
