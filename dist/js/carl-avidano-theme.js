
const themeButtonTarget = document.getElementById('page');
const themeButtonList = document.querySelectorAll('[data-theme]');

for (const themeButton of themeButtonList) {

    themeButton.addEventListener('click', function (event) {

        event.preventDefault();

        let themeColor = themeButton.getAttribute("data-theme");

        switch (themeColor) {
            case 'default':
                themeButtonTarget.classList.remove("bc-secondary", "bc-dark");
                break;
            case 'tan':
                themeButtonTarget.classList.remove("bc-dark");
                themeButtonTarget.classList.add("bc-secondary")
                break;
            case 'dark':
                themeButtonTarget.classList.remove("bc-secondary");
                themeButtonTarget.classList.add("bc-dark")
                break;
        }

        for (const otherThemeButtons of themeButtonList) {
            otherThemeButtons.classList.remove("active");
        }

        event.target.classList.add("active");

    });

}