// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  
  // Scroll down arrow functionality in the hero section
  const scrollDown = document.querySelector('.scroll-down');
  if (scrollDown) {
    scrollDown.addEventListener('click', () => {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
  }
  

  // Smooth scrolling for all navigation links, buttons, and scroll down icons
document.querySelectorAll('.sidebar-nav a, .btn, .scroll-down, nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Theme toggle functionality: Dark theme is default; toggle light-theme class on body
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('light-theme');
    });
  }
  
  // Optional: Additional interactive features can be added here.
  
  