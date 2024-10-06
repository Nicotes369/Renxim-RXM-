document.addEventListener('DOMContentLoaded', function() {
    // Section fade-in effect
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };

    function sectionObserver(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(sectionObserver, observerOptions);
    sections.forEach(section => observer.observe(section));
});
