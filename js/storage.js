// storage.js
// Handles saving and loading application data.
// It does not change state directly.



const TASK_STORAGE_KEY = "tasks";



// Save tasks to localStorage.

export function saveTasks(tasks) {

    localStorage.setItem(
        TASK_STORAGE_KEY,
        JSON.stringify(tasks)
    );

}



// Load tasks from localStorage.

export function loadTasks() {

    const storedTasks =
    localStorage.getItem(TASK_STORAGE_KEY);



    if (!storedTasks) {

        return [];

    }


    try {

        const parsedTasks =
        JSON.parse(storedTasks);



        if (!Array.isArray(parsedTasks)) {

            return [];

        }



        return parsedTasks.map(task => ({

            ...task,

            // Supports older tasks
            // that were created before priorities existed.
            priority: task.priority || "medium"

        }));


    }


    catch(error) {


        console.error(
            "Could not load tasks:",
            error
        );


        return [];

    }

}