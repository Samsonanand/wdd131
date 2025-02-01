// Update the "Last Modified" date in the footer
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

// Footer - Display current year and last modified date
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    // Set the current year and last modified date in the footer
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

    // Static weather data
    const temperatureCelsius = 5; // Temperature in Celsius
    const windSpeedKph = 10; // Wind speed in km/h

    // Call the function to calculate wind chill and display it
    const windChill = calculateWindChill(temperatureCelsius, windSpeedKph);
    document.getElementById("windChill").textContent = windChill;
});

// Function to calculate windchill factor
function calculateWindChill(temp, windSpeed) {
    // Validating the conditions for wind chill calculation
    if ((temp <= 10 && windSpeed > 4.8) || (temp <= 50 && windSpeed > 3)) {
        // Wind chill formula for Celsius
        // For temperature in Celsius and wind speed in km/h
        return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)) + ' °C';
    } else {
        return 'N/A';
    }
}
