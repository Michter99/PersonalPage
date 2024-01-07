document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  var navbarToggler = document.querySelector(".navbar-toggler");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      if (!navbarToggler.classList.contains("collapsed")) {
        navbarToggler.click();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle");

  themeToggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    themeToggleButton.textContent = document.body.classList.contains(
      "dark-mode"
    )
      ? "LIGHT MODE"
      : "DARK MODE";

    const navbar = document.getElementsByClassName("navbar")[0];
    if (document.body.classList.contains("dark-mode")) {
      navbar.classList.remove("navbar-light", "bg-light");
      navbar.classList.add("navbar-dark", "bg-dark");
    } else {
      navbar.classList.remove("navbar-dark", "bg-dark");
      navbar.classList.add("navbar-light", "bg-light");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.add("transparent");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.remove("transparent");
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.add("transparent");
      navbar.classList.remove("scrolled");
    }
  });
});
