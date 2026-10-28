
const intro = document.getElementById("intro");
const gift = document.getElementById("gift");

const openButton = document.getElementById("openButton");
const backButton = document.getElementById("backButton");
const heartsLayer = document.getElementById("heartsLayer");

let heartTimer;

function createHearts() {
  heartsLayer.replaceChildren();

  const symbols = ["♡", "♥", "✿", "✧"];

  for (let i = 0; i < 28; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration =
      (4 + Math.random() * 4) + "s";
    heart.style.animationDelay =
      Math.random() * 2 + "s";
    heart.style.fontSize =
      (14 + Math.random() * 17) + "px";

    heartsLayer.appendChild(heart);
  }

  clearTimeout(heartTimer);

  heartTimer = setTimeout(() => {
    heartsLayer.replaceChildren();
  }, 10500);
}

openButton.addEventListener("click", () => {
  intro.classList.add("hidden");
  gift.classList.remove("hidden");

  createHearts();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

backButton.addEventListener("click", () => {
  gift.classList.add("hidden");
  intro.classList.remove("hidden");

  heartsLayer.replaceChildren();
  clearTimeout(heartTimer);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
