// render.js
// Responsible only for creating and updating the task list UI.
// It does not store data or change application state directly.


import {
    tasks,
    searchTerm,
    currentFilter
} from "./state.js";


import {
    toggleTask,
    deleteTask,
    editTask
} from "./tasks.js";


import {
    capitalise
} from "./ui.js";


import {
    filterTasks
} from "./taskFilters.js";

import {
    createTaskElement
} from "./taskElement.js";

const taskList =
document.getElementById("taskList");


const taskCounter =
document.getElementById("taskCounter");


export function renderTasks() {


    taskList.innerHTML = "";


    updateTaskCounter();



    let tasksToRender =
    filterTasks(
        tasks,
        currentFilter,
        searchTerm
    );


    // NO TASKS

    if (tasks.length === 0) {


        taskList.innerHTML = "<li>No tasks yet.</li>";

        return;


    }


    // NO MATCHES

    if (tasksToRender.length === 0) {


        taskList.innerHTML = "<li>No matching tasks found.</li>";

        return;

    }


    // CREATE TASK ELEMENTS

    tasksToRender.forEach(task => {
        const taskElement =
        createTaskElement(
            task,
            renderTasks
        );

        taskList.appendChild(taskElement);

    });

}


function updateTaskCounter() {


    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(task => task.completed).length;

    taskCounter.textContent = `Total: ${totalTasks} | Completed: ${completedTasks}`;


}