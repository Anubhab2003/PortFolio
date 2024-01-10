// Select the header element
const header = document.querySelector('header');

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - header.offsetHeight, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Header reveal animation on scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 100) {
    header.classList.add('slide-in');
  } else {
    header.classList.remove('slide-in');
  }
});

// Define the styles for the animation in your CSS file (already provided)
// ...
