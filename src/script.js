// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Active section highlighting on scroll
function updateActiveSection() {
    const sections = ['home', 'about', 'research', 'projects', 'publications', 'contact'];
    const scrollPosition = window.scrollY + 100;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const navLink = document.querySelector(`[data-section="${sectionId}"]`);

        if (section && navLink) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                // Add active class to current link
                navLink.classList.add('active');
            }
        }
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            
            if (navMenu.style.display === 'flex') {
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.flexDirection = 'column';
                navMenu.style.background = 'rgba(2, 6, 23, 0.95)';
                navMenu.style.padding = '1rem';
                navMenu.style.borderTop = '1px solid rgba(6, 182, 212, 0.2)';
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navMenu.style.display = 'none';
                }
            });
        });
    }
}

// Contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            // This is a mock submission - in a real application, you would send this to a backend
            console.log('Form submitted:', formData);
            alert('Thank you for your message! This is a demo, so no message was actually sent.');

            // Reset form
            contactForm.reset();
        });
    }
}

// Add click handlers for all navigation links
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            scrollToSection(sectionId);
        });
    });

    // Also setup other scroll buttons
    const scrollButtons = document.querySelectorAll('[onclick*="scrollToSection"]');
    scrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const onclickAttr = button.getAttribute('onclick');
            const match = onclickAttr.match(/scrollToSection\('(.+?)'\)/);
            if (match) {
                scrollToSection(match[1]);
            }
        });
    });
}

// Intersection Observer for fade-in animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const animatedElements = document.querySelectorAll(
        '.about-card, .research-card, .project-card, .publication-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Header scroll effect
function setupHeaderScroll() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.background = 'rgba(2, 6, 23, 0.95)';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(2, 6, 23, 0.8)';
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// Parallax effect for hero orbs
function setupParallax() {
    const orbs = document.querySelectorAll('.hero-orb');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        orbs.forEach((orb, index) => {
            const speed = (index + 1) * 0.2;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupMobileMenu();
    setupContactForm();
    setupScrollAnimations();
    setupHeaderScroll();
    setupParallax();

    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Initial call

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const navMenu = document.getElementById('navMenu');
            if (window.innerWidth > 768 && navMenu) {
                navMenu.style.display = 'flex';
                navMenu.style.position = 'static';
                navMenu.style.flexDirection = 'row';
                navMenu.style.background = 'transparent';
                navMenu.style.padding = '0';
                navMenu.style.borderTop = 'none';
            }
        }, 250);
    });
});

// Preload images for better performance
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
});

// Add smooth reveal for sections on scroll
const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15
});

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
