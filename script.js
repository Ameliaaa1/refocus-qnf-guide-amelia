const progressBar = document.getElementById('progressBar');
const updateProgress = () => { const h = document.documentElement; const p = h.scrollTop / (h.scrollHeight - h.clientHeight); progressBar.style.width = `${Math.max(0, Math.min(1, p)) * 100}%`; };
window.addEventListener('scroll', updateProgress, { passive: true }); updateProgress();
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
