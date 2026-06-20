const projectCards = document.querySelectorAll('.project-card');
const projectModal = document.querySelector('.project-modal');
const projectModalImage = document.getElementById('project-modal-image');
const projectModalTitle = document.getElementById('project-modal-title');
const projectModalDescription = document.getElementById('project-modal-description');
const projectModalLinks = document.getElementById('project-modal-links');
const modalCloseTargets = document.querySelectorAll('[data-modal-close]');
const projectsSection = document.querySelector('.projects-section');
let lastFocusedElement = null;

const openProjectModal = (card) => {
    const links = JSON.parse(card.dataset.links || '[]');

    projectModalImage.src = card.dataset.image || '';
    projectModalImage.alt = card.dataset.title || '';
    projectModalTitle.textContent = card.dataset.title || '';
    projectModalDescription.textContent = card.dataset.description || '';
    projectModalLinks.innerHTML = links
        .map((link) => {
            const prefix = link.prefix || (link.icon === 'fa-gamepad' ? 'fas' : 'fab');
            return `<a class="project-modal-link" href="${link.href}" target="_blank" rel="noopener"><i class="${prefix} ${link.icon}"></i>${link.label}</a>`;
        })
        .join('');

    projectModal.classList.add('is-open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    lastFocusedElement = document.activeElement;
    const closeButton = projectModal.querySelector('.project-modal-close');
    closeButton.focus();
};

const closeProjectModal = () => {
    projectModal.classList.remove('is-open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
    }
};

projectCards.forEach((card) => {
    card.addEventListener('click', () => {
        openProjectModal(card);
    });

    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProjectModal(card);
        }
    });
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        sectionObserver.unobserve(entry.target);
    });
}, { threshold: 0.2 });

if (projectsSection) {
    sectionObserver.observe(projectsSection);
}

modalCloseTargets.forEach((target) => {
    target.addEventListener('click', closeProjectModal);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectModal.classList.contains('is-open')) {
        closeProjectModal();
    }
});
