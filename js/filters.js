// filters.js
// Handles changing the active task filter.
// It does not render or update buttons.


import {
    setCurrentFilter
} from "./state.js";



export function chooseFilter(filter) {

    setCurrentFilter(filter);

}