function hamburg(x) {
  x.classList.toggle("change");
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

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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
