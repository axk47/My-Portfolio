// =======================================
// Custom Cursor
// =======================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

// Cursor expand on hover over interactive elements
document.querySelectorAll('a, button, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
  });
  
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// =======================================
// Parallax Effect for Background Layers
// =======================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const layers = document.querySelectorAll('.parallax-layer');
  
  layers.forEach((layer, index) => {
    const speed = (index + 1) * 0.3;
    layer.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// =======================================
// Smooth Scrolling
// =======================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// =======================================
// Theme Toggle
// =======================================
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
});

// =======================================
// Animated Counter for Stats
// =======================================
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(1);
  }, 16);
}

// Intersection Observer for Counter Animation
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseFloat(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target);
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
  statObserver.observe(stat);
});

// =======================================
// Scroll-Triggered Animations
// =======================================
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.glass-section, .project-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  scrollObserver.observe(el);
});

// =======================================
// Floating Animation for Project Cards
// =======================================
document.querySelectorAll('.project-card').forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});

// =======================================
// Interactive Parallax on Mouse Move
// =======================================
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const x = (clientX / window.innerWidth - 0.5) * 20;
  const y = (clientY / window.innerHeight - 0.5) * 20;
  
  document.querySelectorAll('.glass-card').forEach(card => {
    card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
});

// Reset on mouse leave
document.addEventListener('mouseleave', () => {
  document.querySelectorAll('.glass-card').forEach(card => {
    card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  });
});
