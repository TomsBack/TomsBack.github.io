'use strict';
let darkMode = localStorage.getItem("darkMode");

if (darkMode == null && window.matchMedia) {
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
}
darkMode = Boolean(darkMode);

const themeSwitcher = document.querySelector(".theme-switcher");
const buttonSwitcher = document.querySelector(".button-switcher");

const darkIcon = document.querySelector("#dark");
const lightIcon = document.querySelector("#light");

const colorPicker = new CodeMirrorColorPicker.ColorPicker({
    position: "inline",
    container: document.querySelector("#picker"),
    color: 'blue', // init color code 
    type : 'palette' // or 'sketch',  default type is 'chromedevtool'
})

console.log(colorPicker);

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

    localStorage.setItem("darkMode", darkMode);
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
    darkMode = event.matches;
    setTheme();
});

buttonSwitcher.addEventListener("click", event => {
    darkMode = !darkMode;

    setTheme();
});