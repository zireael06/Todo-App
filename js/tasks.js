import {
    createTask
} from "./taskFactory.js";

import {
    tasks,
    setTasks
} from "./state.js";

import {
    saveTasks
} from "./storage.js";


export function addTask(text) {

    const newTask = createTask(text);


    const updatedTasks = [
        ...tasks,
        newTask
    ];


    setTasks(updatedTasks);

    saveTasks(updatedTasks);

}



export function toggleTask(id) {

    const updatedTasks = tasks.map(task => {

        if (task.id === id) {

            return {
                ...task,
                completed: !task.completed
            };

        }

        return task;

    });


    setTasks(updatedTasks);

    saveTasks(updatedTasks);

}



export function deleteTask(id) {

    const updatedTasks = tasks.filter(
        task => task.id !== id
    );


    setTasks(updatedTasks);

    saveTasks(updatedTasks);

}



export function editTask(id, newText) {


    const updatedTasks = tasks.map(task => {


        if (task.id === id) {

            return {
                ...task,
                text: newText
            };

        }


        return task;

    });


    setTasks(updatedTasks);

    saveTasks(updatedTasks);

}