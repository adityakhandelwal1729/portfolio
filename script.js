// ---------- Utilities ----------
function getHeaderHeight() {
  const header = document.getElementById('header');
  return header ? header.offsetHeight : 0;
}

function scrollToId(id, { updateHash = true } = {}) {
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return; // id doesn't exist in the DOM

  const y = target.getBoundingClientRect().top + window.pageYOffset - getHeaderHeight();
  window.scrollTo({ top: y, behavior: 'smooth' });
  if (updateHash) history.replaceState(null, '', '#' + id);
}

// ---------- Navigation ----------
function setupNavigation() {
  // Intercept only internal hash links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href') || '';
      if (!href.startsWith('#')) return; // external link → let default happen

      const id = href.slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return; // no matching section; do nothing (HTML mismatch)

      e.preventDefault();
      scrollToId(id, { updateHash: true });
    });
  });
}

// ---------- Active link highlighting ----------
function updateActiveSection() {
  const headerOffset = getHeaderHeight() + 20;
  const scrollY = window.scrollY + headerOffset;

  // Consider only real sections that exist in DOM
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  let currentId = null;

  for (const sec of sections) {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (scrollY >= top && scrollY < bottom) {
      currentId = sec.id;
      break;
    }
  }

  // Update classes on matching nav links
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  if (currentId) {
    const activeLink =
      document.querySelector(`.nav-link[href="#${currentId}"]`) ||
      document.querySelector(`.nav-link[href$="#${currentId}"]`);
    if (activeLink) activeLink.classList.add('active');
  }
}

// ---------- Mobile menu (matches your HTML: no #navMenu, just .nav-menu) ----------
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn'); // only if you have one
  const navMenu = document.querySelector('.nav-menu');
  if (!navMenu || !mobileMenuBtn) return;

  mobileMenuBtn.addEventListener('click', () => {
    const open = navMenu.style.display === 'flex';
    navMenu.style.display = open ? 'none' : 'flex';

    if (!open) {
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

  // Close mobile menu when clicking any nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) navMenu.style.display = 'none';
    });
  });
}

// ---------- Contact form ----------
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById('name')?.value || '',
      email: document.getElementById('email')?.value || '',
      message: document.getElementById('message')?.value || ''
    };
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo, so no message was actually sent.');
    contactForm.reset();
  });
}

// ---------- Scroll reveal animations ----------
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

  const animated = document.querySelectorAll('.about-card, .research-card, .project-card, .publication-item');
  animated.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// ---------- Header effects ----------
function setupHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.style.background = 'rgba(2, 6, 23, 0.95)';
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(2, 6, 23, 0.8)';
      header.style.boxShadow = 'none';
    }
  });
}

// ---------- Parallax orbs ----------
function setupParallax() {
  const orbs = document.querySelectorAll('.hero-orb');
  if (!orbs.length) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 0.2;
      orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
}

// ---------- Initial hash handling (offset-aware) ----------
function handleInitialHash() {
  if (location.hash && location.hash.length > 1) {
    const id = decodeURIComponent(location.hash.slice(1));
    // Wait a tick so layout is ready, then scroll with offset
    requestAnimationFrame(() => scrollToId(id, { updateHash: false }));
  }
}

// ---------- Image preload ----------
function setupImagePreload() {
  window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
      }
    });
  });
}

// ---------- Section reveal (class .revealed) ----------
function setupSectionReveal() {
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(sec => sectionObserver.observe(sec));
  });
}

// ---------- Boot ----------
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupMobileMenu();
  setupContactForm();
  setupScrollAnimations();
  setupHeaderScroll();
  setupParallax();
  handleInitialHash();            // scroll to hash if page opened with #...

  window.addEventListener('scroll', updateActiveSection);
  updateActiveSection();

  // Responsive reset for mobile menu (if you add #mobileMenuBtn later)
  const navMenu = document.querySelector('.nav-menu');
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
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

setupImagePreload();
setupSectionReveal();
