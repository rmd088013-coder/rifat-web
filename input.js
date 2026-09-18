function showMessage() {
    alert("Welcome to my website! 😎");
}
function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const button = document.getElementById("themeToggle");

    if (document.body.classList.contains("light-mode")) {
        button.innerHTML = "🌙 Dark Mode";
    } else {
        button.innerHTML = "☀️ Light Mode";
    }
}
/* iPhone Style Scroll Zoom */

function scrollZoom() {

    /* Text zoom */
    const elements = document.querySelectorAll(
        "#about h2, #about p, #contact h2, #contact p"
    );

    elements.forEach(function(element) {

        const rect = element.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        let progress =
            1 - Math.abs(
                (rect.top + rect.height / 2) - screenHeight / 2
            ) / (screenHeight / 1.5);

        progress = Math.max(0, Math.min(1, progress));

        const scale = 0.45 + (progress * 0.55);
        const opacity = 0.4 + (progress * 0.6);

        element.style.transform = "scale(" + scale + ")";
        element.style.opacity = opacity;
    });


    /* Photo zoom + blur */
    const photo = document.querySelector("#home img");

    if (photo) {

        const rect = photo.getBoundingClientRect();
        const screenHeight = window.innerHeight;

        let progress =
            1 - Math.abs(
                (rect.top + rect.height / 2) - screenHeight / 2
            ) / (screenHeight / 1.2);

        progress = Math.max(0, Math.min(1, progress));

        const scale = 0.45 + (progress * 0.55);
        const blur = (1 - progress) * 2;

        photo.style.transform = "scale(" + scale + ")";
        photo.style.filter = "blur(" + blur + "px)";
        photo.style.opacity = 0.5 + (progress * 0.5);
    }
}

window.addEventListener("scroll", scrollZoom);
window.addEventListener("load", scrollZoom);

scrollZoom();