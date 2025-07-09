function startSplash() {
  const splash = document.getElementById("splash");
  const audio = document.getElementById("splash-audio");

  if (sessionStorage.getItem("splash-shown")) {
    splash.style.display = "none";
    if (audio) audio.pause();
    return;
  }

  if (audio) {
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }

  setTimeout(() => {
    splash.style.opacity = 0;
    setTimeout(() => {
      splash.style.display = "none";
      if (audio) audio.pause();
      sessionStorage.setItem("splash-shown", "true");
    }, 1000);
  }, 6000);
}
