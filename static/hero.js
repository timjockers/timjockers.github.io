const backgroundVideo = document.querySelector(".background-video");

if (!(backgroundVideo instanceof HTMLVideoElement)) {
    throw new Error("Hero background video was not found.");
}

backgroundVideo.loop = false;
backgroundVideo.addEventListener("ended", () => {
    backgroundVideo.currentTime = 0;
    backgroundVideo.play().catch((error) => {
        console.error("Failed to restart hero background video:", error);
    });
});
