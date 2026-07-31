// taskFilter.js
// Handles filtering and searching tasks.
// It does not change state or render UI.


export function filterTasks(
    tasks,
    currentFilter,
    searchTerm
) {


    let filteredTasks = tasks;



    // FILTER ACTIVE TASKS

    if (currentFilter === "active") {


        filteredTasks = filteredTasks.filter(
            task => !task.completed
        );


    }



    // FILTER COMPLETED TASKS

    else if (currentFilter === "completed") {


        filteredTasks = filteredTasks.filter(
            task => task.completed
        );


    }



    // SEARCH FILTER

    if (searchTerm) {


        filteredTasks = filteredTasks.filter(
            task =>
            task.text
            .toLowerCase()
            .includes(searchTerm)
        );


    }



    return filteredTasks;

}