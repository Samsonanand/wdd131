document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    const lastModified = document.getElementById("last-modified");

    if (productSelect) {
        productSelect.innerHTML += `
            <option value="p1">Smartphone</option>
            <option value="p2">Laptop</option>
            <option value="p3">Headphones</option>
            <option value="p4">Smartwatch</option>
        `;
    }

    if (lastModified) {
        lastModified.textContent = new Date(document.lastModified).toLocaleString();
    }
});
