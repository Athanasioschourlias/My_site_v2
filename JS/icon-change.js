// const header = document.querySelector("nav");
// const sectionOne = document.querySelector(".intro");
// var nav = document.getElementById("nav-icon").src;

// const sectionOneOptions = {
//     rootMargin: "-200px 0px 0px 0px"
// };

// const sectionOneObserver = new IntersectionObserver
// (function(
//     entries,
//     sectionOneObserver
// ){\
//     if(!entry.isIntersecting) {
//         nav.src = "./icons/code(white).svg";
//     } else {
//         nav.src = "./icons/code.svg";
//     }

// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);
function change(iconID) {
    if (document.getElementById(iconID).className == "fa fa-chevron-up") {
        document.getElementById(iconID).className = "fa fa-chevron-down";
    } else {
        document.getElementById(iconID).className = "fa fa-chevron-up";
    }
}