// ---- Edit this data to make the portfolio yours ----
const portfolio = {
  name: "ROSOS, BRIX BRANDY G.",
  title: "Web Developer",
  bio: "I mainly do backend stuff throughout our every project, but I also contribute to the planning and building.",
  photo: "pic.jpg", // put your picture in this folder with this name
  skills: ["PHP", "JavaScript", "Git"],
  projects: [
    {
      title: "Booksy",
      description: "A website for requesting, acquiring and tracking places that has been or will be booked.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A short portfolio website to showcase my work and skills.",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "#",
    },
    {
      title: "Pancake POS",
      description: "A complete management system for a pancake shop, showcasing how to manage orders, inventory, and sales.",
      tags: ["HTML", "JavaScript", "Git", "PHP", "MySQL"],
      link: "#",
    },
  ],
};

// ---- Rendering ----
const initial = portfolio.name.charAt(0).toUpperCase();
const fallback =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='#FFC83D'/><text x='50' y='50' font-family='sans-serif' font-size='44' font-weight='700' fill='#0E1330' text-anchor='middle' dominant-baseline='central'>${initial}</text></svg>`
  );

const pic = document.getElementById("profile-pic");
pic.onerror = () => { pic.onerror = null; pic.src = fallback; };
pic.src = portfolio.photo;

document.title = `${portfolio.name} | Portfolio`;
document.getElementById("name").textContent = portfolio.name;
document.getElementById("brand").textContent = portfolio.name;
document.getElementById("title").textContent = portfolio.title;
document.getElementById("bio").textContent = portfolio.bio;

document.getElementById("skills").innerHTML = portfolio.skills
  .map((s) => `<li class="pill">${s}</li>`)
  .join("");

document.getElementById("projects").innerHTML = portfolio.projects
  .map(
    (p) => `
    <li class="project">
      <a href="${p.link}">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <span class="more">View project &rarr;</span>
      </a>
    </li>`
  )
  .join("");

// ---- Dark mode toggle ----
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

function syncToggle() {
  const dark = root.classList.contains("dark");
  toggle.setAttribute("aria-pressed", String(dark));
  toggle.textContent = dark ? "Light mode" : "Dark mode";
}

toggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  try {
    localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
  } catch (e) {}
  syncToggle();
});
syncToggle();

// ---- Mobile menu ----
const menuBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
}
menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });