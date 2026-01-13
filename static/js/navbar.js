const navItems = [
    { name: "Home", href: "./home.html" },
    { name: "Projects", href: "./projects.html" },
    { name: "Contact", href: "./contact.html" }
];

// Grab the existing <ul>
const navbar = document.querySelector(".navbar");

// Loop through items and add <li>
navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.name;
    li.appendChild(a);
    navbar.appendChild(li);
});

// Add the theme toggle button as well
const button = document.createElement("button");
button.id = "theme-toggle";
button.textContent = "◐";
navbar.appendChild(button);
