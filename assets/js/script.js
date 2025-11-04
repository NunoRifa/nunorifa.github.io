document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");

  // Check for saved theme preference or default to light
  const currentTheme = localStorage.getItem("theme") || "light";

  // Apply the saved theme
  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", function () {
    if (document.body.getAttribute("data-theme") === "dark") {
      // Switch to light theme
      document.body.removeAttribute("data-theme");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
      localStorage.setItem("theme", "light");
    } else {
      // Switch to dark theme
      document.body.setAttribute("data-theme", "dark");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
      localStorage.setItem("theme", "dark");
    }
  });
});
