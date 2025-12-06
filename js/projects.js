// ========================================
// Dynamic Projects Loader
// ========================================

(function() {
    'use strict';

    // Projects data (in real implementation, this would be fetched from data/projects.json)
    const projectsData = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A clean personal portfolio built with HTML, CSS, and JavaScript.",
            tech: ["HTML", "CSS", "JavaScript"],
            image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
            link: "https://github.com/orezon/portfolio"
        },
        {
            id: 2,
            title: "UI/UX Dashboard Concept",
            description: "A modern dashboard UI concept emphasizing clean design.",
            tech: ["Figma", "UI Design"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
            link: "https://behance.net/orezon"
        },
        {
            id: 3,
            title: "E-Commerce Mobile App",
            description: "Flutter-based mobile application with modern UI/UX principles.",
            tech: ["Flutter", "Dart", "UI Design"],
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
            link: "https://github.com/orezon/ecommerce"
        },
        {
            id: 4,
            title: "Landing Page Design",
            description: "Creative landing page with smooth animations and interactions.",
            tech: ["HTML", "CSS", "JavaScript", "GSAP"],
            image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
            link: "https://github.com/orezon/landing"
        }
    ];

    // Function to create project card HTML
    function createProjectCard(project) {
        const techTags = project.tech.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        return `
            <div class="project-card">
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${techTags}
                    </div>
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <span>View Project</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
        `;
    }

    // Function to load projects
    function loadProjects() {
        const projectsContainer = document.getElementById('projects-container');
        
        if (!projectsContainer) {
            console.error('Projects container not found');
            return;
        }

        // In real implementation, use fetch to load from JSON file:
        /*
        fetch('data/projects.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load projects');
                }
                return response.json();
            })
            .then(projects => {
                const projectsHTML = projects.map(createProjectCard).join('');
                projectsContainer.innerHTML = projectsHTML;
            })
            .catch(error => {
                console.error('Error loading projects:', error);
                projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
            });
        */

        // Using static data for now
        const projectsHTML = projectsData.map(createProjectCard).join('');
        projectsContainer.innerHTML = projectsHTML;

        // Add staggered animation delay
        const projectCards = projectsContainer.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Load projects when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadProjects);
    } else {
        loadProjects();
    }

})();
