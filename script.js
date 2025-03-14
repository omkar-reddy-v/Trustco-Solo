document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    const videoThumbnail = document.querySelector(".video-container");
    const menuIcon = document.getElementById("menu-icon");
    const navMenu = document.getElementById("nav-menu");

    // Handle video thumbnail click
    videoThumbnail.addEventListener("click", function () {
        console.log("Video thumbnail clicked! Redirecting to video...");
    });

    // Handle menu toggle on mobile
    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
document.getElementById("current-year").textContent = new Date().getFullYear();