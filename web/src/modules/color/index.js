import "./_style.scss";
// import "./_theme.scss";

//////////////////////////////////////////////
// Color
//////////////////////////////////////////////

export default class Color {

    constructor() {

        const themeButtonTarget = document.getElementById('page');
        const themeButtonToggle = document.querySelector('[data-theme]');

        let themeBG = localStorage.getItem('themeColor');

        switch (themeBG) {
            case 'dark':
                themeButtonTarget.classList.remove('theme-white');
                themeButtonTarget.classList.add('theme-dark');
                localStorage.setItem('themeColor', 'dark');
                themeButtonToggle.setAttribute("data-theme", "white");
                break;
            case 'white':
                themeButtonTarget.classList.remove('theme-dark');
                themeButtonTarget.classList.add('theme-white');
                localStorage.setItem('themeColor', 'white');
                themeButtonToggle.setAttribute("data-theme", "dark");
                break;
        }

        themeButtonToggle.addEventListener('click', (event) => {

            event.preventDefault();

            let setThemeColor = themeButtonToggle.getAttribute("data-theme");

            switch (setThemeColor) {
                case 'white':
                    event.target.setAttribute("data-theme", "dark");
                    themeButtonTarget.classList.remove("theme-dark");
                    themeButtonTarget.classList.add("theme-white");
                    localStorage.setItem('themeColor', 'light');
                    break;
                case 'dark':
                    event.target.setAttribute("data-theme", "white");
                    themeButtonTarget.classList.remove("theme-white");
                    themeButtonTarget.classList.add("theme-dark");
                    localStorage.setItem('themeColor', 'dark');
                    break;
            }

        });

    }
}