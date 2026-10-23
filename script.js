
document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    // Stop safely if the button is missing
    if (!themeToggle) {
        console.error("Theme toggle button was not found.");
        return;
    }

    // Apply the saved theme, or use dark mode by default
    let savedTheme = "dark";

    try {
        savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    } catch (error) {
        console.warn("Theme preference could not be loaded.");
    }

    function applyTheme(theme) {
        const isLight = theme === "light";

        document.body.classList.toggle("light-mode", isLight);

        themeToggle.textContent = isLight
            ? "🌙 Dark Mode"
            : "☀️ Light Mode";

        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark mode" : "Switch to light mode"
        );

        themeToggle.setAttribute("aria-pressed", String(isLight));

        // Remember the visitor's preference
        try {
            localStorage.setItem("portfolio-theme", theme);
        } catch (error) {
            console.warn("Theme preference could not be saved.");
        }
    }

    // Set the initial theme
    applyTheme(savedTheme);

    // Switch themes when clicked
    themeToggle.addEventListener("click", function () {
        const isCurrentlyLight =
            document.body.classList.contains("light-mode");

        applyTheme(isCurrentlyLight ? "dark" : "light");
    });
});
