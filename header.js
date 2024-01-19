// Responsive Header

const hamburgerMenu = document.querySelector(".hamMenu");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const navLinks = document.querySelector(".navlinks");


hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
});

hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active")
});

hamburgerMenu.addEventListener("click", () => {
    header.classList.toggle("active")
});

// navLinks.addEventListener("click", () => {
//     hamburgerMenu.classList.remove("active")
// });

// navLinks.addEventListener("click", () => {
//     nav.classList.remove("active")
// });