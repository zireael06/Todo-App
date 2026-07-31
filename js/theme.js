import { updateThemeButton } from "./ui.js";


export function initialiseTheme(themeToggle) {

    if (!themeToggle) return;


    updateThemeButton(themeToggle);


    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle("dark");

            updateThemeButton(themeToggle);

        }
    );

}