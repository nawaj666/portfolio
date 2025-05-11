// Scroll-based reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-show');
        }
    });
});

document.querySelectorAll('.vertical').forEach((el) => observer.observe(el));
