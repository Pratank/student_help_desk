document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    const currentUrl = window.location.href;
  
    // Get all navigation links
    const navLinks = document.querySelectorAll("nav a");
  
    // Loop through each link and check if it matches the current URL
    navLinks.forEach(function (link) {
      if (link.href === currentUrl) {
        // Add a class to highlight the current page
        link.classList.add("active");
      }
    });
  });
  