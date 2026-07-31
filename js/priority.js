// priority.js
// Handles changing the selected task priority.


import {
    currentPriority,
    setCurrentPriority
} from "./state.js";



export function cyclePriority() {

    if (currentPriority === "medium") {

        setCurrentPriority("high");

    }


    else if (currentPriority === "high") {
        setCurrentPriority("low");
    }


    else {
        setCurrentPriority("medium");

    }

}