document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling pour les liens de navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optionnel: Animation simple à l'apparition des sections
    // Ceci est un exemple simple, pour des animations plus robustes,
    // une bibliothèque comme AOS (Animate On Scroll) serait préférable.

    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.2 // Quand 20% de la section est visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Arrêter d'observer une fois l'animation déclenchée
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section'); // Prépare l'élément pour l'animation
        sectionObserver.observe(section);
    });

    // Style pour l'animation (ajouter dans style.css si vous voulez l'intégrer)
    /*
    .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .fade-in-section.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    */
});