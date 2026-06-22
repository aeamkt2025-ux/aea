/* AEA – main.js */

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// Active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50
      ? '0 4px 30px rgba(0,0,0,0.3)'
      : '0 2px 20px rgba(0,0,0,0.2)';
  }, { passive: true });
}

// Gallery lightbox (placeholder message)
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const lb = document.querySelector('.lightbox');
    if (lb) { lb.classList.add('open'); }
  });
});
document.querySelector('.lightbox-close')?.addEventListener('click', () => {
  document.querySelector('.lightbox')?.classList.remove('open');
});
document.querySelector('.lightbox')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});
