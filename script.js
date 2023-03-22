const navMenu = document.querySelectorAll('.nav-link');
const botaoTema = document.querySelector(".botao-tema");

botaoTema.addEventListener("click", switchTheme);
function switchTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
    console.log(newTheme);
}

function checkUserTheme(){
    const root = document.documentElement;
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if(prefersDarkMode) {
        root.className = 'dark';
    }
    else {
        root.className = 'light';
    }
}

navMenu.forEach(link => {
    link.addEventListener('click', set => {
        setActive(link);
        //loadSection(link.getAttribute('title'));
    });
});

function setActive(navItem){
    navMenu.forEach((link) => {
        if(link.classList.contains('active'))
            link.classList.remove('active');
    });
    navItem.classList.add('active');
}

function loadSection(href) {
    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.innerHTML = href.innerHTML;
}

window.onload = () => {
    checkUserTheme();
    console.log(botaoTema);
}