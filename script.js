document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    const videoThumbnail = document.querySelector(".video-thumbnail");

    videoThumbnail.addEventListener("click", function () {
        console.log("Video thumbnail clicked!");
    });
});
