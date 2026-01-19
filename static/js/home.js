fetch("./assets/projects.json")
    .then(response => response.json())
    .then(data => {
        data.sort((a, b) => new Date(b.updated) - new Date(a.updated));
        const recent = data.slice(0, 3);
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

