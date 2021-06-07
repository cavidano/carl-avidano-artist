
//////////////////////////////////////////////
// A. Fadeout on Scroll
//////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {

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