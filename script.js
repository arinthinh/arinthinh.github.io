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

const projectModal = document.getElementById('project-modal');
const projectModalBody = projectModal?.querySelector('.project-modal-body');
const projectModalClose = projectModal?.querySelector('.project-modal-close');

document.querySelectorAll('.project-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const template = trigger.parentElement.querySelector('.project-data');
        const icon = trigger.querySelector('img');
        if (!projectModal || !projectModalBody || !(template instanceof HTMLTemplateElement)) return;

        const content = template.content.cloneNode(true);
        if (icon) content.prepend(icon.cloneNode(true));

        projectModalBody.replaceChildren(content);
        projectModal.showModal();
    });
});

projectModalClose?.addEventListener('click', () => projectModal.close());

projectModal?.addEventListener('click', (event) => {
    if (event.target === projectModal) projectModal.close();
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox?.querySelector('.lightbox-image');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

document.addEventListener('click', (event) => {
    const btn = event.target.closest('.project-screenshot');
    if (!btn || !lightbox || !lightboxImage) return;
    const img = btn.querySelector('img');
    if (!img) return;
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt || '';
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
});

lightboxClose?.addEventListener('click', () => lightbox.close());

lightbox?.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
});
