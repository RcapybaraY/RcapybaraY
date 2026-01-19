function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (document.getElementById('loading') !== null) {
        document.getElementById('loading').classList.remove('invert');
        if (theme === 'dark') {
            document.getElementById('loading').classList.add('invert');
        }
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