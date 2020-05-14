window.addEventListener('load', () => {

//////////////////////////////////////////////
// A. Theme Color Buttons
//////////////////////////////////////////////

const themeButtonTarget = document.getElementById('page');
const themeButtonList = document.querySelectorAll('[data-theme]');

for (const themeButton of themeButtonList) {

    themeButton.addEventListener('click', function (event) {

        event.preventDefault();

        let themeColor = themeButton.getAttribute("data-theme");

        switch (themeColor) {
            case 'default':
                themeButtonTarget.classList.remove("bc-light", "bc-dark");
                break;
            case 'light':
                themeButtonTarget.classList.remove("bc-dark");
                themeButtonTarget.classList.add("bc-light")
                break;
            case 'dark':
                themeButtonTarget.classList.remove("bc-light");
                themeButtonTarget.classList.add("bc-dark")
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