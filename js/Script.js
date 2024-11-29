// Toggle the menu when clicking the hamburger
document.querySelector(".hamburger").addEventListener("click", toggleMenu);
document.querySelector(".hamburger").addEventListener("touchstart", toggleMenu);

// Toggle menu on hamburger click
function toggleMenu() {
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");

  dropdown.classList.toggle("show");
  hamburger.classList.toggle("change");
}

// Close dropdown when any link is clicked
document.querySelectorAll(".dropdown-content a").forEach((link) => {
  link.addEventListener("click", () => {
    const dropdown = document.getElementById("myDropdown");
    const hamburger = document.querySelector(".hamburger");
    dropdown.classList.remove("show");
    hamburger.classList.remove("change");
  });
});

// Ensure the menu closes when hash changes (same-page navigation)
window.addEventListener("hashchange", () => {
  console.log("Window click detected:", event.target); // Log the clicked element
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");
  dropdown.classList.remove("show");
  hamburger.classList.remove("change");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", (event) => {
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");

  if (!dropdown.contains(event.target) && !hamburger.contains(event.target)) {
    dropdown.classList.remove("show");
    hamburger.classList.remove("change");
  }
});
