// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// Fake form submit (replace with real endpoint later)
document.querySelector('.cta-form')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! We’ll contact you soon.');
});