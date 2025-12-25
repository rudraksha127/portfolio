// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Active Section Highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});

// Skill Animation
const bars = document.querySelectorAll(".bar span");

const animateSkills = () => {
    bars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        bar.style.width = width;
    });
};

window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills");
    if (window.scrollY > skillsSection.offsetTop - 400) {
        animateSkills();
    }
});

// Back to Top
document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully.");
    this.reset();
});
