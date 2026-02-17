// ================= NAVBAR SHADOW ON SCROLL =================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ================= PARALLAX EFFECT =================
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.hero-layer');
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    layers.forEach((layer, index) => {
        const depth = (index + 1) * 10;
        layer.style.transform = `translate(${x / depth}px, ${y / depth}px)`;
    });
});

// ================= FADE IN ON SCROLL =================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});