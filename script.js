// Hamburger Animation
const Hamburger = document.querySelector(".hamburger");
function showBar() {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
}

//Auto type:
var typed = new Typed(".auto-type", {
  strings: [" Web Developer", "Coding Enthusiast"],
  typeSpeed: 50,
  backSpeed: 50,
  fadeOutClass: "typed-fade-out",
  loop: true,
});

// Glow effect logic
function handleMouseMove(e) {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
}

const cards = document.querySelectorAll(".skill-card");
for (card of cards) {
  card.onmousemove = (e) => handleMouseMove(e);
}

// Dark theme logic
let icon = document.getElementById("icon");
icon.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");

  if (document.body.classList.contains("darkMode")) {
    icon.src = "assets/moon-icon.png";
  } else {
    icon.src = "assets/sun-icon.png";
  }
});
