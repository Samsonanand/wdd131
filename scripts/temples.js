// Update the "Last Modified" date in the footer
// minified version
document.getElementById("lastModified")&&(document.getElementById("lastModified").textContent=document.lastModified);


document.getElementById("menu-toggle").addEventListener("click",function(){document.getElementById("navbar").classList.toggle("active")});

// Dynamically load a non-essential script
if (window.innerWidth < 600) {
    const script = document.createElement('script');
    script.src = 'non-essential-script.js';
    script.async = true;
    document.body.appendChild(script);
}