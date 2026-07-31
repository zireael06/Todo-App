// state.js
// Single source of truth for application state.
// Other modules import these values and update them using setters.
import { loadTasks } from "./storage.js";


// TASK DATA
export let tasks = loadTasks();


// UI STATE
export let searchTerm = "";
export let currentFilter = "all";
export let currentPriority = "medium";


// UPDATE TASKS
export function setTasks(newTasks) {

    tasks = newTasks;

}


// UPDATE SEARCH
export function setSearchTerm(value) {

    searchTerm = value;

}


// UPDATE FILTER
export function setCurrentFilter(filter) {

    currentFilter = filter;

}


// UPDATE PRIORITY

export function setCurrentPriority(priority) {

    currentPriority = priority;

}