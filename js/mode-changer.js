const root = document.documentElement;

if (!localStorage.getItem("darkMode")) {
    localStorage.setItem("darkMode", window.matchMedia("(prefers-color-scheme: dark)").matches);
}

applyTheme();

window.addEventListener("load", (event) => {
    let switchButton = document.querySelector(".mode-switch").firstElementChild;

    switchButton.addEventListener("click", (event) => {
        let darkMode = localStorage.getItem("darkMode") === 'true';
        
        if (darkMode) {
            toLight();
            localStorage.setItem("darkMode", false);
        } else {
            toDark();
            localStorage.setItem("darkMode", true);
        }
    });
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
    localStorage.setItem("darkMode", event.matches);
    applyTheme();
});

function applyTheme() {
    let darkMode = localStorage.getItem("darkMode") === 'true';

    if (darkMode) {
        toDark();
    } else {
        toLight();
    }
}

function toLight() {
    root.style.setProperty("--main-bg-color", "#e6e6e6");
    root.style.setProperty("--header-bg-color", "#dbdbdb");
    root.style.setProperty("--element-bg-color", "#e0e0e0");
    root.style.setProperty("--font-color", "black");
    root.style.setProperty("--text-glow", "rgb(54, 54, 54)");
    root.style.setProperty("--text-glow-strong", "rgb(36, 36, 36)");
    root.style.setProperty("--footer-text-color", "#464f5f");
    root.style.setProperty("--invert-amount", "0");
}

function toDark() {
    root.style.setProperty("--main-bg-color", "#1a1d22");
    root.style.setProperty("--header-bg-color", "#202329");
    root.style.setProperty("--element-bg-color", "#20242b");
    root.style.setProperty("--font-color", "rgb(226, 226, 226)");
    root.style.setProperty("--text-glow", "rgb(141, 141, 141)");
    root.style.setProperty("--text-glow-strong", "rgb(201, 201, 201)");
    root.style.setProperty("--footer-text-color", "#7b88a0");
    root.style.setProperty("--invert-amount", "1");
}