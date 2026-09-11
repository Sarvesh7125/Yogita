const clickMe = document.getElementById("clickMe");
const welcome = document.getElementById("welcome");
const videoScreen = document.getElementById("videoScreen");
const video = document.getElementById("birthdayVideo");

function confettiBurst() {
  const symbols = ["✦", "♥", "●", "✧"];
  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (10 + Math.random() * 18) + "px";
    piece.style.animationDelay = Math.random() * 0.7 + "s";
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3600);
  }
}

clickMe.addEventListener("click", () => {
  confettiBurst();

  welcome.classList.remove("active");
  videoScreen.classList.add("active");

  video.currentTime = 0;
  video.play().catch(() => {
    // Some browsers require a second user gesture for playback.
    // The video controls remain available if autoplay is blocked.
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
});
