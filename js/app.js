import {
    themeToggle,
    addTaskBtn,
    userTextInput,
    filterAllBtn,
    filterActiveBtn,
    filterCompletedBtn,
    userSearchInput,
    prioritySelectorBtn
} from "./dom.js";

import {
    currentPriority,
    currentFilter,
    setSearchTerm
} from "./state.js";


import {
    addTask
} from "./tasks.js";


import {
    renderTasks
} from "./render.js";


import {
    chooseFilter
} from "./filters.js";


import {
    updatePriorityButton,
    updateFilterButtons
} from "./ui.js";


import {
    initialiseTheme
} from "./theme.js";

import {
    cyclePriority
} from "./priority.js";


// INITIAL LOAD

renderTasks();


updatePriorityButton(
    prioritySelectorBtn,
    currentPriority
);


updateFilterButtons(
    filterAllBtn,
    filterActiveBtn,
    filterCompletedBtn,
    currentFilter
);


initialiseTheme(themeToggle);


// ADD TASK

function handleAddTask() {

    const text =
    userTextInput.value.trim();


    if (text === "") return;


    addTask(text);


    userTextInput.value = "";


    userTextInput.focus();


    renderTasks();

}



addTaskBtn.addEventListener("click", handleAddTask);



// ENTER KEY

userTextInput.addEventListener("keydown", event => {


        if (event.key === "Enter") {

            handleAddTask();

        }

    }
);



// SEARCH

userSearchInput.addEventListener("input", () => {

        setSearchTerm(
            userSearchInput.value
            .toLowerCase()
            .trim()
        );


        renderTasks();


    }
);



// PRIORITY BUTTON

prioritySelectorBtn.addEventListener(
    "click",
    () => {


        cyclePriority();


        updatePriorityButton(
            prioritySelectorBtn,
            currentPriority
        );


    }
);



// FILTER BUTTONS

filterAllBtn.addEventListener(
    "click",
    () => {


        chooseFilter("all");


        updateFilterButtons(
            filterAllBtn,
            filterActiveBtn,
            filterCompletedBtn,
            "all"
        );


        renderTasks();


    }
);


filterActiveBtn.addEventListener(
    "click",
    () => {


        chooseFilter("active");


        updateFilterButtons(
            filterAllBtn,
            filterActiveBtn,
            filterCompletedBtn,
            "active"
        );


        renderTasks();


    }
);



filterCompletedBtn.addEventListener(
    "click",
    () => {


        chooseFilter("completed");


        updateFilterButtons(
            filterAllBtn,
            filterActiveBtn,
            filterCompletedBtn,
            "completed"
        );


        renderTasks();


    }
);

