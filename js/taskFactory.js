// taskFactory.js
// Creates new task objects.
// It does not save or update state.


import {
    currentPriority
} from "./state.js";



export function createTask(text) {


    return {

        id: Date.now(),

        text: text,

        completed: false,

        priority: currentPriority

    };

}