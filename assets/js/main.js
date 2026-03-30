/* ============================================================
   HAIL NEXUS — Main JavaScript
   ============================================================ */

// ── Navbar scroll effect ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  // Active nav link highlighting
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// ── Mobile nav toggle ─────────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close on link click
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll fade-in animations ─────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => observer.observe(el));

// ── Smooth scroll for all anchor links ───────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Contact form handler ──────────────────────────────────────
function handleFormSubmit(e) {
  e.preventDefault();
  const form    = document.getElementById('estimateForm');
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('button[type="submit"]');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Encode form data for Formspree / future backend
  const data = new FormData(form);
  const payload = {};
  data.forEach((v, k) => payload[k] = v);

  // Simulate submission (replace URL with real endpoint)
  setTimeout(() => {
    form.style.display = 'none';
    success.style.display = 'block';
  }, 900);
}

// ── Phone number formatting ───────────────────────────────────
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function () {
    let val = this.value.replace(/\D/g, '').substring(0, 10);
    if (val.length >= 6)      val = `(${val.slice(0,3)}) ${val.slice(3,6)}-${val.slice(6)}`;
    else if (val.length >= 3) val = `(${val.slice(0,3)}) ${val.slice(3)}`;
    this.value = val;
  });
}
