// ui.js
// Contains functions that only update the user interface.
// It does not change application data.



// Updates the dark mode button icon and accessibility label.

export function updateThemeButton(themeToggle) {

    if (!themeToggle) return;


    if (document.body.classList.contains("dark")) {


        themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';


        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );


    } else {


        themeToggle.innerHTML =
        '<i class="fa-solid fa-moon"></i>';


        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

    }

}





// Updates the priority selector button text.

export function updatePriorityButton(
    prioritySelectorBtn,
    currentPriority
) {

    if (!prioritySelectorBtn) return;


    prioritySelectorBtn.textContent =
    "Priority: " + capitalise(currentPriority);

}







// Updates which filter button appears active.

export function updateFilterButtons(
    filterAllBtn,
    filterActiveBtn,
    filterCompletedBtn,
    currentFilter
) {

    if (
        !filterAllBtn ||
        !filterActiveBtn ||
        !filterCompletedBtn
    ) {
        return;
    }



    filterAllBtn.classList.remove("active");

    filterActiveBtn.classList.remove("active");

    filterCompletedBtn.classList.remove("active");




    if (currentFilter === "all") {


        filterAllBtn.classList.add("active");


    }


    else if (currentFilter === "active") {


        filterActiveBtn.classList.add("active");


    }


    else if (currentFilter === "completed") {


        filterCompletedBtn.classList.add("active");


    }

}



// Converts text into capitalised format.
// Example:
// "medium" -> "Medium"

export function capitalise(text) {

    if (!text) return "";


    return text.charAt(0).toUpperCase()
    + text.slice(1);

}