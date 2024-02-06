document.getElementById("audio").volume = 0.2;

audio.addEventListener("ended", function () {
    // resets audio to beginning
    this.currentTime = 0;

    // plays audio again
    this.play();
});
