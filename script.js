document.querySelector(".botao-tema").addEventListener("click", switchTheme);
function switchTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
}

window.onload = () => {
    const root = document.documentElement;
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if(prefersDarkMode) {
        root.className = 'dark';
    }
    else {
        root.className = 'light';
    }
}