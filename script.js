const projectsSection = document.querySelector('.projects-section');

if (projectsSection) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            sectionObserver.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    sectionObserver.observe(projectsSection);
}
