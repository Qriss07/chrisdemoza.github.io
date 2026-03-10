document.addEventListener("DOMContentLoaded", () => {
    // 1. Highlight Menu Aktif
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll("nav ul li a").forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.style.color = "#8d775f";
            link.style.borderBottom = "1px solid #8d775f";
            link.style.fontWeight = "600";
        }
    });

    // 2. Jam Digital (Halaman Kontak)
    const clock = document.getElementById('clock');
    if (clock) {
        const updateClock = () => {
            clock.textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
        };
        setInterval(updateClock, 1000);
        updateClock();
    }
});