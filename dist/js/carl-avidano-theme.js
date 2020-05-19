
const themeButtonTarget = document.getElementById('page');
const themeButtonList = document.querySelectorAll('[data-theme]');

let themeBG = localStorage.getItem('themeColor');

if (!themeBG || themeBG === "default") {
    themeButtonTarget.classList.remove('bc-light', 'bc-dark');
    themeButtonTarget.classList.add('bc-white');
    document.querySelector('[data-theme="default"]').classList.add("active");
    localStorage.setItem('theme', 'default');
} else if (themeBG === "light") {
    themeButtonTarget.classList.remove('bc-white', 'bc-dark');
    themeButtonTarget.classList.add('bc-light');
    document.querySelector('[data-theme="light"]').classList.add("active");
    localStorage.setItem('bg', 'dark');
} else if (themeBG === "dark") {
     themeButtonTarget.classList.remove('bc-white');
     themeButtonTarget.classList.add('bc-dark');
     document.querySelector('[data-theme="dark"]').classList.add("active");
     localStorage.setItem('bg', 'dark');
 }

window.addEventListener('load', () => {

//////////////////////////////////////////////
// A. Theme Color Buttons
//////////////////////////////////////////////

for (const themeButton of themeButtonList) {

    themeButton.addEventListener('click', function (event) {

        event.preventDefault();

        let setThemeColor = themeButton.getAttribute("data-theme");

        switch (setThemeColor) {
            case 'default':
                themeButtonTarget.classList.remove("bc-light", "bc-dark");
                localStorage.setItem('themeColor', 'default');
                break;

            case 'light':
                themeButtonTarget.classList.remove("bc-dark");
                themeButtonTarget.classList.add("bc-light");
                localStorage.setItem('themeColor', 'light');
                break;

            case 'dark':
                themeButtonTarget.classList.remove("bc-light");
                themeButtonTarget.classList.add("bc-dark");
                localStorage.setItem('themeColor', 'dark');
                break;
        } 

        for (const otherThemeButtons of themeButtonList) {
            otherThemeButtons.classList.remove("active");
        }

        event.target.classList.add("active");

    });

}

//////////////////////////////////////////////
// A. Fadeout on Scroll
//////////////////////////////////////////////

const scrollElement = document.getElementById('primary-content');
const scrollTarget = document.getElementById('article-introduction');

if (scrollTarget){

    const scrollTargetHeight = scrollTarget.scrollHeight;
    let scrollPosition = 0;

    const doSomething = (scroll_pos) => {
        if (scroll_pos < scrollTargetHeight) {
            console.log(scroll_pos);
            scrollTarget.style.opacity = (scrollTargetHeight - scrollPosition) / scrollTargetHeight;
        } else {
            return;
        }
    }

    scrollElement.addEventListener('scroll', function(e) {
        scrollPosition = scrollElement.scrollTop;
        doSomething(scrollPosition);
    });
}

});