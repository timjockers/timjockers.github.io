(() => {
    const video = document.querySelector(".background-video");

    if (!(video instanceof HTMLVideoElement)) {
        return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const attemptPlayback = () => {
        if (!video.paused) {
            return;
        }

        const playback = video.play();
        playback?.catch((error) => {
            if (error.name !== "NotAllowedError" && error.name !== "AbortError") {
                console.error("Hero video playback failed:", error);
            }
        });
    };

    video.addEventListener("canplay", attemptPlayback);
    document.addEventListener("visibilitychange", () => {
        if (!document.hidden) {
            attemptPlayback();
        }
    });
    document.addEventListener("pointerdown", attemptPlayback);
    document.addEventListener("keydown", attemptPlayback);

    attemptPlayback();
})();
