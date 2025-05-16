// Переключение Night/Light Mode
document.getElementById("themeToggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});

// Кнопки с редиректами
document.getElementById("downloadBtn").addEventListener("click", function() {
    window.location.href = "https://cpu999rbu.github.io/downloads/";
});

document.getElementById("speedtestBtn").addEventListener("click", function() {
    window.location.href = "https://cpu999rbu.github.io/paint/";
});

document.getElementById("paintBtn").addEventListener("click", function() {
    window.location.href = "https://drive.google.com/drive/u/1/folders/1BK9gXIlmM15ajFzTMl7mmDAwyDN46Qkn";
});
