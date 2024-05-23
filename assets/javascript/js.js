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
// #region FOOTER DROP DOWN
// Add this to your js.js file

document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll('.itemFlex');
    
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const isOpen = accordion.nextElementSibling.classList.contains('show');

            // Update all contents visibility
            if (isOpen) {
                document.querySelectorAll('.item-content.show').forEach(content => {
                    content.classList.remove('show');
                });
                document.querySelectorAll('.itemFlex img').forEach(icon => {
                    icon.src = "assets/images/Icons/plus_icon.svg"; 
                });
            } else {
                document.querySelectorAll('.item-content').forEach(content => {
                    content.classList.add('show');
                });
                document.querySelectorAll('.itemFlex img').forEach(icon => {
                    icon.src = "assets/images/Icons/minus_icon.svg";
                });
            }
        });
    });
});
//#endregion FOOTER DROP DOWN

