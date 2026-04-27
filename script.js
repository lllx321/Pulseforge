// BOTÓN
function enterSystem() {
    subtleGlitch();
    alert("Accediendo al sistema...");
}


// MICRO GLITCH EN TÍTULO
function subtleGlitch() {
    const title = document.getElementById("title");

    const original = title.textContent;
    const chars = "!@#$%^&*";

    let glitch = "";

    for (let i = 0; i < original.length; i++) {
        glitch += Math.random() < 0.1
            ? chars[Math.floor(Math.random() * chars.length)]
            : original[i];
    }

    title.textContent = glitch;

    setTimeout(() => {
        title.textContent = original;
    }, 120);
}


// HOVER “VIVO” EN BOTONES
document.querySelectorAll(".primary").forEach(btn => {
    btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        btn.style.background =
            `radial-gradient(circle at ${x}px ${y}px, #ffffff, #dddddd)`;
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.background = "white";
    });
});