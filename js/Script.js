// Toggle the menu when clicking the hamburger
document.querySelector(".hamburger").addEventListener("click", toggleMenu);
document.querySelector(".hamburger").addEventListener("touchstart", toggleMenu);

function toggleMenu() {
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");

  console.log(dropdown); // Check if dropdown is found
  console.log(hamburger); // Check if hamburger is found

  dropdown.classList.toggle("show");
  hamburger.classList.toggle("change");
}

// Close dropdown menu when a link is clicked
document.querySelectorAll(".dropdown-content a").forEach((link) => {
  link.addEventListener("click", () => {
    const dropdown = document.getElementById("myDropdown");
    const hamburger = document.querySelector(".hamburger");
    dropdown.classList.remove("show");
    hamburger.classList.remove("change");
  });
});

// Close the menu when hash changes (same page navigation)
window.addEventListener("hashchange", () => {
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");
  dropdown.classList.remove("show");
  hamburger.classList.remove("change");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.querySelectorAll(".dropdown-content a").forEach((item) => {
  item.addEventListener("click", () => {
    const dropdown = document.getElementById("myDropdown"); // Pas aan naar jouw dropdown-ID
    dropdown.classList.remove("show"); // Zorg dat "show" de klasse is die het dropdown-menu opent
  });
});
