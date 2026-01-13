function applyTheme(theme) {
    document.getElementById('loading').classList.remove('invert');
    if (theme === 'dark') {
        document.getElementById('loading').classList.add('invert');

    }
    document.documentElement.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
}
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName("navbar").style.padding = "30px 10px";
    } else {
        document.getElementsByClassName("navbar").style.padding = "80px 10px";
    }
}

// On load: use saved theme or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

// Example toggle button
document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(current === 'dark' ? 'light' : 'dark');
});

fetch("./assets/projects.json")
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => new Date(b.updated) - new Date(a.updated));
        const recent = data;
        let html = `<h3> Recent Projects </h3>`;
        for (let project of recent) {

            let color = "var(--theme-4)";
            if (project.tag.toLowerCase().includes("unity") ||
                project.tag.toLowerCase().includes("c#")) {
                color = "var(--theme-3)";
            } else if (project.tag.toLowerCase().includes("html") ||
                project.tag.toLowerCase().includes("css") ||
                project.tag.toLowerCase().includes("js")) {
                color = "var(--theme-1)";
            }

            html += `
            <span>
                <a href="${project.link}" style="font-weight:bold; color:${color}">
                    ${project.name}
                </a> - ${project.description}
            </span><br>
        `;
        }
        document.getElementById('projects').innerHTML = html;
    })
    .catch(error => console.error('Error loading projects:', error));

