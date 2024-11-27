function toggleMenu() {
  const dropdown = document.getElementById("myDropdown");
  const hamburger = document.querySelector(".hamburger");

  console.log(dropdown); // Check if dropdown is found
  console.log(hamburger); // Check if hamburger is found

  dropdown.classList.toggle("show");
  hamburger.classList.toggle("change");
}

document.querySelectorAll(".dropdown-content a").forEach((item) => {
  item.addEventListener("click", () => {
    // Close the dropdown menu
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.remove("show");

    // Reset the hamburger icon animation
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("change");
  });
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
