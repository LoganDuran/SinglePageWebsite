// Responsive Header

const hamburgerMenu = document.querySelector(".hamMenu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".navlinks");


hamburgerMenu.addEventListener("click", function () {
        [header, nav, hamburgerMenu].forEach(function (section) {
                return section.classList.toggle("active");
            });
    });


navLinks.forEach(function (navLink) {
        return navLink.addEventListener("click", closeManu)
    });

   
function closeManu() {
        [header, nav, hamburgerMenu].forEach(segment => segment.classList.remove("active"));
    };