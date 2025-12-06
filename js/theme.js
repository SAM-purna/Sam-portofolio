// ========================================
// Theme Toggle - Dark/Light Mode
// ========================================

(function() {
    'use strict';

    // Get elements
    const themeToggleDesktop = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('darkMode');
    
    // Apply saved theme on page load
    if (currentTheme === 'true') {
        body.classList.add('dark');
    }

    // Toggle theme function
    function toggleTheme() {
        body.classList.toggle('dark');
        
        // Save preference to localStorage
        const isDark = body.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        
        // Optional: Add smooth transition
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }

    // Add event listeners to both desktop and mobile toggle buttons
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }

    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }

    // Optional: Listen for system theme changes
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only apply system preference if no user preference is saved
        if (!localStorage.getItem('darkMode')) {
            if (darkModeQuery.matches) {
                body.classList.add('dark');
            }
        }

        // Listen for system theme changes
        darkModeQuery.addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('darkMode')) {
                if (e.matches) {
                    body.classList.add('dark');
                } else {
                    body.classList.remove('dark');
                }
            }
        });
    }

})();
