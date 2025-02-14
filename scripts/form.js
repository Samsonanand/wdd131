// Product List
const products = [
    { id: "p1", name: "Smartphone" },
    { id: "p2", name: "Laptop" },
    { id: "p3", name: "Headphones" },
    { id: "p4", name: "Smartwatch" }
];

// Populate Select Dropdown
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Display Last Modified Date
    document.getElementById("last-modified").textContent = new Date(document.lastModified).toLocaleString();
});
