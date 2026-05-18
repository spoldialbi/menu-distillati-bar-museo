// Caricamento immagini
document.querySelectorAll('.item[data-img]').forEach(card => {
  const src = card.dataset.img;
  const img = card.querySelector('.image img');
  if (!img || !src) return;
  img.onload = () => img.classList.add('loaded');
  img.src = src;
});

// Animazioni on scroll (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      if (!el.classList.contains('visible')) {
        if (el.classList.contains('item')) {
          const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains('item') && !c.classList.contains('hidden-by-filter'));
          const idx = siblings.indexOf(el) % 2;
          setTimeout(() => el.classList.add('visible'), idx * 80);
        } else {
          el.classList.add('visible');
        }
      }
    } else {
      el.classList.remove('visible');
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.item, .section-divider').forEach(el => observer.observe(el));

// Filtri gin — pill group
const filterBar = document.getElementById('gin-filters');
if (filterBar) {
  const grid = document.getElementById('gin-grid');
  const items = grid.querySelectorAll('.item[data-category]');

  filterBar.addEventListener('click', e => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn || btn.classList.contains('active')) return;

    filterBar.querySelector('.active').classList.remove('active');
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    items.forEach(item => {
      if (filter === 'tutti' || item.dataset.category === filter) {
        item.classList.remove('hidden-by-filter');
      } else {
        item.classList.add('hidden-by-filter');
      }
    });
  });
}

// Pulsante torna su
const backBtn = document.getElementById('backToTop');
if (backBtn) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        backBtn.classList.toggle('show', window.scrollY > 400);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
