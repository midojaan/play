// Use the API service to get IP information
fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        const country = data.country || "unknown"; // Get the country name
        console.log("Country:", country);

        // List of Arab countries
        const arabCountries = [
            "AE", "BH", "DZ", "EG", "IQ", "JO", "KW", "LB", "LY",
            "MA", "OM", "QA", "SA", "SD", "SY", "TN", "YE", "PS"
        ];

        // Check if the country is among the Arab countries
        if (!arabCountries.includes(country)) {
            document.getElementById("messageText").innerText = "This content is only available in Arab regions.";
            document.getElementById("messageBox").style.display = "flex"; // Show the message box
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

// Close button functionality
document.getElementById("closeButton").onclick = function() {
    document.getElementById("messageBox").style.display = "none"; // Hide the message box
};
