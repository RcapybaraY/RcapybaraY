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

