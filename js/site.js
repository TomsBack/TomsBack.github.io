'use strict';
let darkMode = Boolean(localStorage.getItem("darkMode"));

const themeSwitcher = document.querySelector(".theme-switcher");
const buttonSwitcher = document.querySelector(".button-switcher");

const darkIcon = document.querySelector("#dark");
const lightIcon = document.querySelector("#light");

setTheme();

function setTheme() {
    if (darkMode) {
        buttonSwitcher.classList.remove("light-active");
        
        darkIcon.classList.add("active");
        lightIcon.classList.remove("active");
    } else {
        buttonSwitcher.classList.add("light-active");

        darkIcon.classList.remove("active");
        lightIcon.classList.add("active");
    }
}

buttonSwitcher.addEventListener("click", event => {
    darkMode = !darkMode;

    setTheme();
    console.log(darkMode);

    localStorage.setItem("darkMode", darkMode);
})