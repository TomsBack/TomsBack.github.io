'use strict';
let darkMode = localStorage.getItem("darkMode");

if (darkMode === null && window.matchMedia) {
    darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
}
darkMode = darkMode === "true";

const themeSwitcher = document.querySelector(".theme-switcher");
const buttonSwitcher = document.querySelector(".button-switcher");

const darkIcon = document.querySelector("#dark");
const lightIcon = document.querySelector("#light");


addEventListener("load", e => {
    setTheme();

    //start the particles
    Particles.init({
        selector: ".background",
        color: getComputedStyle(document.body).getPropertyValue("--text-hover-color"),
        connectParticles: true,
    });
});

function setTheme() {
    if (darkMode) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");

        buttonSwitcher.classList.remove("light-active");
        
        darkIcon.classList.add("active");
        lightIcon.classList.remove("active");
    } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");

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