
// Smooth navigation and active menu highlighting
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Neura AI!");
    console.log("Explore the future of Artificial Intelligence.");
});

// Button click effect
const exploreButton = document.querySelector(".hero .btn");

exploreButton.addEventListener("click", () => {
    console.log("Let's explore Artificial Intelligence!");
});

