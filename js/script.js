// Pruebina
console.log('Qué tal ho')

document.addEventListener("DOMContentLoaded", function () {

    const darkModeToggle = document.getElementById("darkModeToggle");
    const currentModeText = document.getElementById("current-mode");
    const moonIcon = document.querySelector(".icono-luna");
    const sunIcon = document.querySelector(".icono-sol");

    darkModeToggle.addEventListener("click", function () {
        // Toggle clase dark-mode nel body
        document.body.classList.toggle("dark-mode");

        // Toggle de les semeyes
        moonIcon.classList.toggle("hidden");
        sunIcon.classList.toggle("hidden");

        const isDarkMode = document.body.classList.contains("dark-mode");
        currentModeText.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    });
});
