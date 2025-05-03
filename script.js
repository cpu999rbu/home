// Переключение Night/Light Mode
document.getElementById("themeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});

// Кнопки с редиректами
document.getElementById("downloadBtn").addEventListener("click", function() {
    window.location.href = "https://cpu999rbu.github.io/downloads/";
});

document.getElementById("speedtestBtn").addEventListener("click", function() {
    window.location.href = "https://example.com/speedtest";
});

document.getElementById("paintBtn").addEventListener("click", function() {
    window.location.href = "https://example.com/paint";
});
