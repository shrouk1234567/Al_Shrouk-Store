const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});


/* Close menu after clicking a link */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

});

/*============================== */
const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

    });

});

/*======================================== */
let cartCount = 0;

const cartCountElement =
    document.querySelector(".cart-count");

const addButtons =
    document.querySelectorAll(".add");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartCountElement.textContent = cartCount;

    });

});