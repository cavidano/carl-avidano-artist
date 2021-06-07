
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

        // for (const otherThemeButtons of themeButtonList) {
        //     otherThemeButtons.classList.remove("active");
        // }

        // event.target.classList.add("active");

    });

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