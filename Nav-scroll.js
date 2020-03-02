const header = document.querySelector("header");
const sectionOne = document.querySelector(".intro");
// var nav = document.getElementById("nav-icon").src;

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries,
    sectionOneObserver
){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
            // nav.src = "./icons/code(white).svg";
        } else {
            header.classList.remove("nav-scrolled");
            // nav.src = "./icons/code.svg";
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);