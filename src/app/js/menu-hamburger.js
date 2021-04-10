const menuHamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector("nav")

menuHamburger.addEventListener("click", () => {
    menuHamburger.classList.toggle("open")
    nav.classList.toggle("show-nav")
});
