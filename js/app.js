const hamburger = document.getElementById("hamburger");
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

function closeMenu() {
  menu.classList.add("hidden");
  menuIcon.classList.remove("bx-x");
  menuIcon.classList.add("bx-menu");
}

function handleOutsideClick(event) {
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    closeMenu();
  }
}

function handleEscapeKey(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menuIcon.classList.toggle("bx-x");
  menuIcon.classList.toggle("bx-menu");
});

document.addEventListener("click", handleOutsideClick);
document.addEventListener("keydown", handleEscapeKey);

moon.addEventListener("click", () => {
  body.classList.toggle.add("dark");
  console.log(body);
});
