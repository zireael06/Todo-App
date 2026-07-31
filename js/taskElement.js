// taskElement.js
// Creates a single task list item.
// It does not render the whole list.


import {
    editTask,
    deleteTask,
    toggleTask
} from "./tasks.js";


import {
    capitalise
} from "./ui.js";



export function createTaskElement(task, renderTasks) {

    const li = document.createElement("li");

    li.classList.add(task.priority);



    const span = document.createElement("span");

    span.textContent = task.text;



    const priority = document.createElement("span");

    priority.classList.add("priority", task.priority);

    priority.textContent = capitalise(task.priority);

    const editBtn = document.createElement("button");

    editBtn.textContent = "✏️";

    editBtn.classList.add("editBtn");

    editBtn.setAttribute("aria-label", "Edit task");



    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "🗑️";

    deleteBtn.classList.add("deleteBtn");

    deleteBtn.setAttribute("aria-label", "Delete task");


    li.append(
        span,
        priority,
        editBtn,
        deleteBtn
    );

    li.classList.toggle("completed", task.completed);


    editBtn.addEventListener("click", event => {

        event.stopPropagation();

        const input = document.createElement("input");

        input.addEventListener("click", event => {
            event.stopPropagation();
        });
        

        input.value = task.text; 
        li.replaceChild(input, span);
        input.focus();


        input.addEventListener("keydown", event => { 

            if (event.key === "Enter") {
                const newInput = input.value.trim();
                if (!newInput) return;
                editTask(task.id, newInput);
                renderTasks();

            }
        });
    });



    deleteBtn.addEventListener("click",event => {

        event.stopPropagation();
        deleteTask(task.id);
        renderTasks();
        }
    );



    li.addEventListener("click",() => {

        toggleTask(task.id);
        renderTasks();
    });

    return li;

}