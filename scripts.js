document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer p");

    navLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.5}s`;
    });

    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 1}s`;
    });

    footer.style.animation = "colorChange 5s infinite";
});
