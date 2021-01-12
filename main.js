const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.ham-close');
const navBar = document.querySelector('.header-nav');

hamburger.addEventListener('click', function () {
    navBar.classList.add('open');
    closeIcon.style.display = "block";

})

closeIcon.addEventListener('click', function () {
    navBar.classList.remove('open');
    closeIcon.style.display = "none";
})