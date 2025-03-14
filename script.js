document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");
    const menuLinks = document.querySelectorAll("#nav-menu ul li a");

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from closing immediately
        navMenu.classList.toggle("active");
    });

    // Hide menu when clicking outside
    document.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

    // Prevent menu from closing when clicking inside
    navMenu.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Hide menu when clicking on a menu link
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});




document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    this.reset();
});