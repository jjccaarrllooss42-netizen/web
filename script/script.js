// ================= NAVBAR SHADOW ON SCROLL =================
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// ================= PARALLAX EFFECT =================
document.addEventListener('mousemove', (e) => {
    const layers = document.querySelectorAll('.hero-layer');

    if (layers.length === 0) return;

    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    layers.forEach((layer, index) => {
        const depth = (index + 1) * 10;
        layer.style.transform = `translate(${x / depth}px, ${y / depth}px)`;
    });
});

// ================= FADE IN ON SCROLL =================
const faders = document.querySelectorAll('.fade-in');

if (faders.length > 0) {
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
}

// ================= CARRUSEL =================
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

if (track && nextBtn && prevBtn) {

    nextBtn.addEventListener('click', () => {
        if (index < 1) {
            index++;
            track.style.transform = `translateX(-${index * 100}%)`;
        }
    });

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * 100}%)`;
        }
    });

}

// ================= CARRITO (FIX COMPLETO) =================
document.addEventListener("DOMContentLoaded", () => {

    const botones = document.querySelectorAll(".btn-cart");

    botones.forEach(button => {
        button.addEventListener("click", () => {

            let producto = {
                nombre: button.dataset.name,
                precio: parseFloat(button.dataset.price),
                imagen: button.dataset.img
            };

            let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

            carrito.push(producto);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            // 🔥 REDIRIGE AL CARRITO
            window.location.href = "carrito.html";
        });
    });

});

function irCheckout() {
    window.location.href = "registro.html";
}


