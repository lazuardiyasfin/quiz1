function getTheme() {
    let localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    // Check user's system theme setting
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    }
    
    return "light";
}

function applyTheme(theme) {
    // Apply theme to the HTML tag
    document.querySelector('html').setAttribute("data-theme", theme);

    // Update toggle button state
    document.querySelector('#night-icon').style.display = theme == 'dark' ? 'none' : 'block';
    document.querySelector('#day-icon').style.display = theme == 'dark' ? 'block' : 'none';

    // Save theme to localStorage
    localStorage.setItem("theme", theme);
}

// On page load:
const toggleButton = document.querySelector('[data-theme-toggle]');
let currentTheme = getTheme();

applyTheme(currentTheme);

// On every toggle:
toggleButton.addEventListener("click", () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);

    currentTheme = newTheme;
});