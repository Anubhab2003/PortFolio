// Ensure function definition is at the top level
function toggleDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
  
    let isDarkMode = false; // Initial state (can be stored in localStorage for persistence)
  
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode'); // Apply/remove dark mode class
  
    // Optional: Update toggle button text or icon based on mode
    if (isDarkMode) {
      darkModeToggle.textContent = 'Toggle Light Mode';
    } else {
      darkModeToggle.textContent = 'Toggle Dark Mode';
    }
  }
  
  // Check if toggleDarkMode function exists before adding event listener
  if (typeof toggleDarkMode === 'function') {
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
  } else {
    console.error('toggleDarkMode function not found in script.js!');
  }
  
  // Check for user preference in localStorage (optional)
  if (localStorage.getItem('darkMode') === 'true') {
    isDarkMode = true;
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Toggle Light Mode';
  }
  