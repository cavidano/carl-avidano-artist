
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