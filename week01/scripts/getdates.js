// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById('copyright').textContent =
    `© ${currentYear} | Samson Kalapatapu | Tamil Nadu`;

// Get the last modified date dynamically
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent =
    `Last Modification: ${lastModified}`;
