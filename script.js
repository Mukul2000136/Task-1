window.addEventListener("scroll", function () {
    const Nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        Nav.classList.add("scrolled");
    }
    else {
        Nav.classList.remove("scrolled");
    }
})