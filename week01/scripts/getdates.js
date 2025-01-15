
const author = document.querySelector('meta[name="author"]').getAttribute('content');
console.log(author); // Should print "Samson Kalapatapu"


document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.color = "#ffcc00";  // Change color on hover
    });
    link.addEventListener("mouseleave", () => {
        link.style.color = "#fff";  // Revert color when not hovered
    });
});

// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent =
    `© ${currentYear} | Samson Kalapatapu | Tamil Nadu`;

// Get the last modified date dynamically
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent =
    `Last Modification: ${lastModified}`;
