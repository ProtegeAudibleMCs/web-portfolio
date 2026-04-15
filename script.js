// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    html.setAttribute('data-theme', 'light');
} else {
    html.setAttribute('data-theme', 'dark');
}

darkModeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .education-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Project Modal Functionality
const projectModal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModalBtn = document.querySelector('.close-modal');
const viewProjectBtns = document.querySelectorAll('.view-project-btn');

// Open modal when view project button is clicked
viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const description = btn.getAttribute('data-description');
        const image = btn.getAttribute('data-image');

        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = image;

        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal when close button is clicked
closeModalBtn.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside the modal content
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.style.display === 'block') {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Certificate Modal Functionality
const certificateModal = document.getElementById('certificateModal');
const certificateModalImage = document.getElementById('certificateModalImage');
const certificateModalTitle = document.getElementById('certificateModalTitle');
const certificateModalDescription = document.getElementById('certificateModalDescription');
const closeCertificateModalBtn = document.querySelector('.close-certificate-modal');
const viewCertificateBtns = document.querySelectorAll('.view-certificate-btn');

// Open modal when view certificate button is clicked
viewCertificateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const description = btn.getAttribute('data-description');
        const image = btn.getAttribute('data-image');

        certificateModalTitle.textContent = title;
        certificateModalDescription.textContent = description;
        certificateModalImage.src = image;

        certificateModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
});

// Close modal when close button is clicked
closeCertificateModalBtn.addEventListener('click', () => {
    certificateModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
});

// Close modal when clicking outside the modal content
certificateModal.addEventListener('click', (e) => {
    if (e.target === certificateModal) {
        certificateModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close certificate modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certificateModal.style.display === 'block') {
        certificateModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
