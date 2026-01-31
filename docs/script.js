// =======================================
// Smooth Scrolling for Navigation Links
// =======================================
document.querySelectorAll('.sidebar-nav a, .btn, .scroll-down, nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// =======================================
// Theme Toggle Functionality
// =======================================
const themeToggleBtn = document.getElementById('theme-toggle');
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    // Optional: Save preference to localStorage
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// Load saved theme preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
});

// =======================================
// Scroll-Triggered Animations
// =======================================
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation classes when element comes into view
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      // Optional: Unobserve after animation (animate only once)
      observer.unobserve(entry.target);
    }
  });
}

// Create Intersection Observer
const observerOptions = {
  threshold: 0.1, // Trigger when 10% of element is visible
  rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully visible
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe all sections when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Add animate-on-scroll class to all main sections
  const sections = document.querySelectorAll('main section:not(#hero)');
  sections.forEach((section) => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
  });

  // Also observe project cards individually for staggered effect
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`; // Stagger animation
    observer.observe(card);
  });
});

// =======================================
// Add Hover Effects to Buttons
// =======================================
document.querySelectorAll('.btn, .project-link').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.classList.add('animate__animated', 'animate__pulse');
  });
  
  button.addEventListener('animationend', function() {
    this.classList.remove('animate__animated', 'animate__pulse');
  });
});
