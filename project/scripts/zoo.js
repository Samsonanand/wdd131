document.addEventListener("DOMContentLoaded", function () {
    updateLastModified();
    updateCurrentYear();
    loadExhibits();
    loadLastVisited();
    setupTicketCalculator();
    setupImageSlider();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
    });
});


// Update "Last Modified" date
function updateLastModified() {
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
}

// Update current year in footer
function updateCurrentYear() {
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Load animal exhibits dynamically
function loadExhibits() {
    const exhibits = [
        { name: "Tiger", description: "The Bengal Tiger is the largest cat species.", image: "images/tiger.jpg" },
        { name: "Elephant", description: "The Indian Elephant is known for its intelligence.", image: "images/elephant.jpg" },
        { name: "Peacock", description: "India’s national bird, famous for its colorful feathers.", image: "images/peacock.jpg" }
    ];
    
    const exhibitContainer = document.getElementById("exhibitContainer");
    if (!exhibitContainer) return;

    exhibits.forEach((animal, index) => {
        const exhibitCard = document.createElement("div");
        exhibitCard.classList.add("exhibit-card");
        exhibitCard.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}">
            <h3>${animal.name}</h3>
            <p>${animal.description}</p>
            <button onclick="showMoreInfo(${index})">More Info</button>
        `;
        exhibitContainer.appendChild(exhibitCard);
    });
}

// Show alert on "More Info" click
function showMoreInfo(index) {
    const exhibits = ["Tiger", "Elephant", "Peacock"];
    let visitorType = prompt("Are you a Student or Tourist?").toLowerCase();
    
    const message = visitorType === "student"
        ? `Great! As a student, you get a discount on ${exhibits[index]} exhibit tours.`
        : visitorType === "tourist"
        ? `Welcome, Tourist! Enjoy learning about ${exhibits[index]} at Vandaloor Zoo.`
        : `Enjoy your visit to the ${exhibits[index]} exhibit!`;

    alert(message);
    localStorage.setItem("lastVisitedExhibit", exhibits[index]);
}

// Load last visited exhibit from LocalStorage
function loadLastVisited() {
    const lastVisited = localStorage.getItem("lastVisitedExhibit");
    if (lastVisited) {
        document.getElementById("lastVisitedExhibit").textContent = `Last visited: ${lastVisited}`;
    }
}

// Image Slider
function setupImageSlider() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slides img");

    function showSlides() {
        slides.forEach(img => img.style.display = "none");
        slides[slideIndex].style.display = "block";
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000);
    }

    if (slides.length) showSlides();
}

// 🏷️ Ticket Price Calculation
function setupTicketCalculator() {
    const ticketInputs = document.querySelectorAll("#adults, #children, #students, #international");
    const showCheckboxes = document.querySelectorAll(".show");
    
    const subtotalEl = document.getElementById("subtotal");
    const cgstEl = document.getElementById("cgst");
    const sgstEl = document.getElementById("sgst");
    const totalEl = document.getElementById("total");
    const confirmButton = document.getElementById("confirmBooking");

    const prices = { adults: 200, children: 100, students: 150, international: 500 };
    const taxRate = 0.09;

    function calculateTotal() {
        let subtotal = 0;

        ticketInputs.forEach(input => {
            const quantity = parseInt(input.value) || 0;
            const price = prices[input.id] || 0;
            subtotal += quantity * price;
        });

        // Add show selections
        showCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                subtotal += parseInt(checkbox.value) || 0;
            }
        });

        // Apply Taxes
        const cgst = subtotal * taxRate;
        const sgst = subtotal * taxRate;
        const total = subtotal + cgst + sgst;

        // Update UI
        subtotalEl.textContent = subtotal.toFixed(2);
        cgstEl.textContent = cgst.toFixed(2);
        sgstEl.textContent = sgst.toFixed(2);
        totalEl.textContent = total.toFixed(2);
    }

    // Attach event listeners
    ticketInputs.forEach(input => input.addEventListener("input", calculateTotal));
    showCheckboxes.forEach(checkbox => checkbox.addEventListener("change", calculateTotal));

    confirmButton.addEventListener("click", function () {
        alert(`Booking Confirmed! Total Amount: ₹${totalEl.textContent}`);
    });

    // Ensure total is updated on page load
    calculateTotal();
}
