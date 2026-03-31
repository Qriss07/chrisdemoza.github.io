// 1. JAM & TANGGAL REAL-TIME
function updateClockAndDate() {
    const now = new Date();
    
    // Format Waktu (HH:MM:SS)
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
    
    // Format Tanggal (Long)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('id-ID', options);
}

// Update setiap 1 detik
setInterval(updateClockAndDate, 1000);
updateClockAndDate(); // Jalankan sekali saat load


// 2. NAVIGASI AKTIF SAAT SCROLL (Scrollspy)
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Penyesuaian offset agar menu berganti lebih akurat
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// 3. EFED MUNCUL SAAT SCROLL (Intersection Observer)
const appearFaders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

const appearObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target); // Hanya muncul sekali
    });
}, appearOptions);

appearFaders.forEach(fader => {
    appearObserver.observe(fader);
});


// 4. AI ASSISTANT WIDGET LOGIC (SIMULASI)
function toggleAI() {
    const aiAssistant = document.getElementById('aiAssistant');
    const aiToggleBtn = document.querySelector('.ai-toggle-btn');
    
    if (aiAssistant.style.display === 'none' || aiAssistant.style.display === '') {
        aiAssistant.style.display = 'flex';
        aiToggleBtn.innerHTML = '<i class="fa fa-multiply"></i>'; // Ganti ikon
    } else {
        aiAssistant.style.display = 'none';
        aiToggleBtn.innerHTML = '<i class="fa fa-robot"></i>'; // Kembalikan ikon
    }
}

function sendAIMessage() {
    const inputField = document.getElementById('aiInputText');
    const message = inputField.value.trim();
    const chatBody = document.getElementById('aiBody');

    if (message !== "") {
        // Tampilkan pesan User
        const userMsg = document.createElement('p');
        userMsg.className = "ai-msg text-white";
        userMsg.style.background = "var(--primary)";
        userMsg.style.alignSelf = "flex-end";
        userMsg.textContent = message;
        chatBody.appendChild(userMsg);

        // Simulasi respon AI (Sederhana)
        setTimeout(() => {
            const botMsg = document.createElement('p');
            botMsg.className = "ai-msg";
            botMsg.textContent = "Itu pertanyaan menarik! Sayangnya, asisten ini masih dalam tahap simulasi dan belum memiliki kecerdasan buatan sungguhan untuk menjawab.";
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
        }, 800);

        inputField.value = ""; // Kosongkan input
    }
}