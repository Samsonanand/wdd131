// Temple Data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/320x200/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/320x200/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/320x200/payson-utah-temple-daylight-1416668-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/320x200/yigo_guam_temple_4.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/320x200/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/320x200/mexico-city-temple-lds-591672-wallpaper.jpg"
    },
    {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 14",
        area: 104000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/320x200/bountiful-temple-766347-wallpaper.jpg"
    },
    {
        templeName: "Melbourne Australia Temple",
        location: "Melbourne, Australia",
        dedicated: "2000, June, 16",
        area: 10700 ,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/320x200/melbourne-austrailia-temple-lds-991373-wallpaper.jpg"
    },
    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque, Mexico",
        dedicated: "2000, March ,5",
        area: 34245,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/320x200/albuquerque-temple-lds-137883-wallpaper.jpg"
    }   
];  

// Update Last Modified Date
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

// Create Temple Cards
const templeContainer = document.getElementById("temple-container");

function createTempleCard(temple) {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    templeCard.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templeContainer.appendChild(templeCard);
}

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";
    filteredTemples.forEach(createTempleCard);
}

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('#navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
});
  

// Lazy loading for images
const images = document.querySelectorAll('img');
images.forEach(image => {
  image.setAttribute('loading', 'lazy');
});

// Handle Filter Buttons
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)));
document.getElementById("new").addEventListener("click", () => displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)));
document.getElementById("large").addEventListener("click", () => displayTemples(temples.filter(temple => temple.area > 90000)));
document.getElementById("small").addEventListener("click", () => displayTemples(temples.filter(temple => temple.area < 10000)));

// Initial Display
displayTemples(temples);
