
document.addEventListener("DOMContentLoaded", () => {

    const bannerTarget = document.querySelector('.full-height');

    if (bannerTarget) {
        
        const headerHeight = document.getElementById('global-header').offsetHeight;
        const footerHeight = document.getElementById('global-footer').offsetHeight;

        const headerFooterHeight = headerHeight + footerHeight;

        const setBannerHeight = () => {

            const windowHeight = window.innerHeight;

            bannerTarget.style.height = (windowHeight - headerHeight) + 'px';

        }

        setBannerHeight();
        window.addEventListener('resize', setBannerHeight);

    };
    
    //////////////////////////////////////////////
    // A. Theme Color Buttons
    //////////////////////////////////////////////

    const themeButtonTarget = document.getElementById('page');
    const themeButtonList = document.querySelectorAll('[data-theme]');

    let themeBG = localStorage.getItem('themeColor');

    switch (themeBG) {
        case 'light':
            themeButtonTarget.classList.remove('theme-white', 'theme-dark');
            themeButtonTarget.classList.add('theme-light');
            document.querySelector('[data-theme="light"]').classList.add("active");
            localStorage.setItem('themeColor', 'dark');
            break;
        case 'dark':
            themeButtonTarget.classList.remove('theme-white');
            themeButtonTarget.classList.add('theme-dark');
            document.querySelector('[data-theme="dark"]').classList.add("active");
            localStorage.setItem('themeColor', 'dark');
            break;
        default:
            themeButtonTarget.classList.remove('theme-light', 'theme-dark');
            themeButtonTarget.classList.add('theme-white');
            document.querySelector('[data-theme="default"]').classList.add("active");
            localStorage.setItem('themeColor', 'default');
    }

    for (const themeButton of themeButtonList) {

        themeButton.addEventListener('click', (event) => {

            event.preventDefault();

            let setThemeColor = themeButton.getAttribute("data-theme");

            switch (setThemeColor) {
                case 'default':
                    themeButtonTarget.classList.remove("theme-light", "theme-dark");
                    localStorage.setItem('themeColor', 'default');
                    break;

                case 'light':
                    themeButtonTarget.classList.remove("theme-dark");
                    themeButtonTarget.classList.add("theme-light");
                    localStorage.setItem('themeColor', 'light');
                    break;

                case 'dark':
                    themeButtonTarget.classList.remove("theme-light");
                    themeButtonTarget.classList.add("theme-dark");
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

    const fadeTarget = document.querySelector('#article-introduction');

    if (fadeTarget) {

        const fadeTargetHeight = fadeTarget.scrollHeight;

        let scrollPosition = 0;

        const doSomething = (scroll_pos) => {
            if (scroll_pos < fadeTargetHeight) {
                let fadeTargetOpacity = (fadeTargetHeight - scrollPosition) / fadeTargetHeight;
                console.log(`Window scroll position == ${scroll_pos}, ${fadeTargetOpacity}`);
                fadeTarget.style.opacity = fadeTargetOpacity;
            }
        }

        window.addEventListener('scroll', () => {
            scrollPosition = window.scrollY;
            doSomething(scrollPosition);
        });
    }

});