const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.transform = "scale(1.1)";
  });

  link.addEventListener("mouseout", () => {
    link.style.transform = "scale(1)";
  });
});
