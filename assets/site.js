const nav = document.querySelector('#primary-nav');
const menuButton = document.querySelector('.menu-toggle');
const compact = window.matchMedia('(max-width: 640px)');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  nav.hidden = compact.matches && !open;
  menuButton.querySelector('span').textContent = open ? 'Close' : 'Menu';
}
function syncNavigation() {
  menuButton.hidden = !compact.matches;
  setMenu(false);
}
syncNavigation();
compact.addEventListener('change', syncNavigation);
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', event => {
  if (event.target.closest('a') && compact.matches) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && compact.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false); menuButton.focus();
  }
});

const filters = [...document.querySelectorAll('[data-filter]')];
const papers = [...document.querySelectorAll('.paper')];
document.querySelector('.filter-group').hidden = false;
for (const filter of filters) {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    for (const button of filters) {
      const active = button === filter;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    let count = 0;
    for (const paper of papers) {
      paper.hidden = category !== 'all' && paper.dataset.category !== category;
      if (!paper.hidden) count++;
    }
    document.querySelector('#filter-status').textContent = `${count} research ${count === 1 ? 'entry' : 'entries'} shown.`;
  });
}

const citations = {
  volterra: `@article{galimberti2026volterra,
  title = {Low-dimensional approximations of the conditional law of Volterra processes: a non-positive curvature approach},
  author = {Galimberti, Luca and Arabpour, Reza and Armstrong, John and Kratsios, Anastasis and Livieri, Giulia},
  journal = {Analysis and Applications},
  year = {2026},
  note = {Accepted / in press},
  eprint = {2405.20094},
  archivePrefix = {arXiv},
  url = {https://arxiv.org/abs/2405.20094}
}`,
  lora: `@inproceedings{arabpour2025lora,
  title = {LoRA Fine-Tuning Without GPUs: A CPU-Efficient Meta-Generation Framework for LLMs},
  author = {Arabpour, Reza and S{\\'a}ez de Oc{\\'a}riz Borde, Haitz and Kratsios, Anastasis},
  booktitle = {ICML 2025 Workshop on Efficient Systems for Foundation Models (ES-FoMo)},
  year = {2025},
  eprint = {2507.01806},
  archivePrefix = {arXiv},
  url = {https://arxiv.org/abs/2507.01806}
}`,
};
let toastTimer;
function notify(message) {
  const toast = document.querySelector('#toast');
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
}
async function copyText(text, label) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text);
    notify(`${label} copied to clipboard.`);
  } catch {
    const dialog = document.querySelector('#copy-dialog');
    const field = document.querySelector('#copy-text');
    document.querySelector('#copy-title').textContent = `Copy ${label.toLowerCase()}`;
    field.value = text;
    dialog.showModal();
    field.focus();
    field.select();
  }
}
for (const button of document.querySelectorAll('[data-citation]')) {
  button.hidden = false;
  button.addEventListener('click', () => copyText(citations[button.dataset.citation], 'Citation'));
}
const emailButton = document.querySelector('#copy-email');
emailButton.hidden = false;
emailButton.addEventListener('click', () => copyText('Arabporr@gmail.com', 'Email address'));

// Highlight the section currently being read; every link also works without JS.
if ('IntersectionObserver' in window) {
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const visibleSections = new Map();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) visibleSections.set(entry.target.id, entry.isIntersecting);
    const current = links.find(link => visibleSections.get(link.hash.slice(1)));
    for (const link of links) {
      if (link === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }, { rootMargin: '-15% 0px -50% 0px' });
  for (const link of links) {
    const section = document.getElementById(link.hash.slice(1));
    if (section) observer.observe(section);
  }
}
