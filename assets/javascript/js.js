// #region VeryTopNavigation fixed
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.fixed-Navigation');
    const topNavHeight = document.querySelector('.veryTop-Navigation').offsetHeight;
    const navOffsetTop = nav.offsetTop;

    window.addEventListener('scroll', function() {
        if (window.scrollY > navOffsetTop - topNavHeight) {
            nav.classList.add('fixed');
            document.body.style.paddingTop = nav.offsetHeight + 'px'; // gør mere smooth
        } else {
            nav.classList.remove('fixed');
            document.body.style.paddingTop = '0';
        }
    });
});
// #endregion VeryTopNavigation fixed
// #region search

//#endregion search


