document.querySelector(".hamburger").addEventListener("click", toggleMenu);
document.querySelector(".hamburger").addEventListener("touchstart", toggleMenu);
function toggleMenu() {
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");
  dropdown.classList.toggle("show");
  hamburger.classList.toggle("change");
}
document.querySelectorAll(".dropdown-content a").forEach((link) => {
  link.addEventListener("click", () => {
    const dropdown = document.getElementById("myDropdown");
    const hamburger = document.querySelector(".hamburger");
    dropdown.classList.remove("show");
    hamburger.classList.remove("change");
  });
});
window.addEventListener("hashchange", () => {
  console.log("Window click detected:", event.target);
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");
  dropdown.classList.remove("show");
  hamburger.classList.remove("change");
});
window.addEventListener("click", (event) => {
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");
  if (!dropdown.contains(event.target) && !hamburger.contains(event.target)) {
    dropdown.classList.remove("show");
    hamburger.classList.remove("change");
  }
});
