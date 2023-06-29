/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.body.classList.add('lock-scroll');
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.body.classList.remove('lock-scroll');
}