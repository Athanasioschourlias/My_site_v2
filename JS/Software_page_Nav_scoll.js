const navScrolled = document.getElementById("nav-scrolled");

//!REALLY BAD IMPLEMENTATION DO IT AGAIN WHEN YOU HAVE A BETTER JS UNDERSTANDING
var prevScrollpos = window.pageXOffset;
window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        navScrolled.classList.remove("scrolled-sleep");
        navScrolled.classList.add("scrolled-awake");
    } else {
        navScrolled.classList.remove("scrolled-awake");
        navScrolled.classList.add("scrolled-sleep");
    }

    prevScrollpos = currentScrollpos;
}