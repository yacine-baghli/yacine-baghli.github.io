// ============================
// Theme Toggle
// ============================
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

themeBtn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// ============================
// Navbar scroll
// ============================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ============================
// Mobile menu
// ============================
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    const s = toggle.querySelectorAll('span');
    const open = links.classList.contains('open');
    s[0].style.transform = open ? 'rotate(45deg) translate(4px,4px)' : '';
    s[1].style.opacity = open ? '0' : '1';
    s[2].style.transform = open ? 'rotate(-45deg) translate(4px,-4px)' : '';
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
}));

// ============================
// Scroll reveal
// ============================
const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 60);
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ============================
// Smooth scroll
// ============================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 72, behavior: 'smooth' });
    });
});

// ============================
// Subtle dot grid canvas
// ============================
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let w, h;

function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight * 4;
}
resize();
window.addEventListener('resize', resize);

const dots = [];
const spacing = 60;
const cols = Math.ceil(2000 / spacing);
const rows = Math.ceil(6000 / spacing);
for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
        dots.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            base: 0.12 + Math.random() * 0.08,
            phase: Math.random() * Math.PI * 2
        });
    }
}

let time = 0;
function draw() {
    ctx.clearRect(0, 0, w, h);
    const scrollY = window.scrollY;
    const isLight = html.getAttribute('data-theme') === 'light';
    dots.forEach(d => {
        const screenY = d.y - scrollY * 0.3;
        if (screenY < -20 || screenY > h + 20) return;
        const alpha = d.base + Math.sin(time * 0.8 + d.phase) * 0.04;
        if (isLight) {
            ctx.fillStyle = `rgba(99,102,241,${alpha * 0.6})`;
        } else {
            ctx.fillStyle = `rgba(129,140,248,${alpha})`;
        }
        ctx.beginPath();
        ctx.arc(d.x, screenY, 1, 0, Math.PI * 2);
        ctx.fill();
    });
    time += 0.016;
    requestAnimationFrame(draw);
}
draw();
