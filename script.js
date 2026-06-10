function showMessage() {
    alert(
        "მადლობა დაინტერესებისთვის!\n\nAIA Systems მალე დაგიკავშირდებათ."
    );
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
