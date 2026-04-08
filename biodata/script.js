document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ANIMASI PROGRESS BAR (SKILL) ---
    const skillSection = document.getElementById('skill');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.bar');
                
                progressBars.forEach(bar => {
                    // Mengambil nilai persentase dari atribut 'data-width' di HTML
                    const targetWidth = bar.getAttribute('data-width');
                    
                    // Reset dulu ke 0 agar animasi terlihat mulai dari awal
                    bar.style.width = '0';
                    
                    // Isi kembali sesuai target (dengan jeda sedikit agar halus)
                    setTimeout(() => {
                        bar.style.width = targetWidth;
                        bar.style.transition = "width 1.5s ease-in-out";
                    }, 200);
                });

                // Berhenti mengamati agar animasi tidak berulang terus saat scroll
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (skillSection) {
        skillObserver.observe(skillSection);
    }

    // --- 2. SMOOTH SCROLL & SCROLLSPY ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links li');

    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href') === `#${current}`) {
                li.classList.add('active');
            }
        });
    });
});