let projectsData = [];

fetch("./assets/projects.json")
    .then(response => response.json())
    .then(data => {
        projectsData = data.sort((a, b) => new Date(b.updated) - new Date(a.updated));

        // Load saved view preference
        const savedView = localStorage.getItem('projectsView') || 'list';
        renderProjects(savedView);
        setActiveButton(savedView);
    })
    .catch(error => console.error('Error loading projects:', error));

function renderProjects(view) {
    const projectsContainer = document.getElementById('projects');

    // Clear and set correct class
    projectsContainer.innerHTML = '';
    projectsContainer.className = view === 'grid' ? 'projects-grid' : 'projects-list';

    for (let project of projectsData) {
        let color = "var(--theme-4)";
        if (project.tag.toLowerCase().includes("unity") ||
            project.tag.toLowerCase().includes("c#")) {
            color = "var(--theme-3)";
        } else if (project.tag.toLowerCase().includes("html") ||
            project.tag.toLowerCase().includes("css") ||
            project.tag.toLowerCase().includes("js")) {
            color = "var(--theme-1)";
        }

        const projectElement = document.createElement('span');
        projectElement.className = 'display-projects';
        projectElement.innerHTML = `
            <a href="${project.link}" style="font-weight:bold; color:${color}; text-decoration: underline; text-underline-offset: .5rem;">
                ${project.name}
            </a>
            <span>${project.description}</span>
            <span style="float: right;margin-top:auto; margin-left:auto; margin-bottom:0; font-size: 0.85rem; color: var(--text-color-2);"><br>Last updated: ${new Date(project.updated).toLocaleDateString()}</span>
        `;
        projectsContainer.appendChild(projectElement);
    }
}

function setActiveButton(view) {
    const listBtn = document.getElementById('list-view-btn');
    const gridBtn = document.getElementById('grid-view-btn');

    if (view === 'grid') {
        listBtn.classList.remove('active');
        gridBtn.classList.add('active');
        listBtn.style.backgroundColor = 'transparent';
        listBtn.style.color = 'var(--text-color-2)';
        gridBtn.style.backgroundColor = 'var(--theme-1)';
        gridBtn.style.color = 'white';
    } else {
        listBtn.classList.add('active');
        gridBtn.classList.remove('active');
        listBtn.style.backgroundColor = 'var(--theme-1)';
        listBtn.style.color = 'white';
        gridBtn.style.backgroundColor = 'transparent';
        gridBtn.style.color = 'var(--text-color-2)';
    }
}

// Toggle buttons
document.getElementById('list-view-btn').addEventListener('click', () => {
    localStorage.setItem('projectsView', 'list');
    renderProjects('list');
    setActiveButton('list');
});

document.getElementById('grid-view-btn').addEventListener('click', () => {
    localStorage.setItem('projectsView', 'grid');
    renderProjects('grid');
    setActiveButton('grid');
});

