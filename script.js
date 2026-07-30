


const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

// Ferme le menu quand on clique sur un lien à l'intérieur
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
  });
});

const devisOverlay = document.getElementById('devisOverlay');
const devisClose = document.getElementById('devisClose');
const devisForm = document.getElementById('devisForm');
const devisButtons = document.querySelectorAll('a[href="#contact"].btn--primary, .btn.btn--primary[href="#contact"]');

// Ouvre la modale au clic sur les boutons "Demander un devis"
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn--primary');
  if (btn && btn.getAttribute('href') === '#contact') {
    e.preventDefault();
    devisOverlay.classList.add('is-open');
  }
});

// Fermeture
devisClose.addEventListener('click', () => {
  devisOverlay.classList.remove('is-open');
});

devisOverlay.addEventListener('click', (e) => {
  if (e.target === devisOverlay) {
    devisOverlay.classList.remove('is-open');
  }
});

// Envoi via mailto
devisForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nom = document.getElementById('devisNom').value;
  const email = document.getElementById('devisEmail').value;
  const tel = document.getElementById('devisTel').value;
  const message = document.getElementById('devisMessage').value;

  const sujet = encodeURIComponent(`Demande de devis — ${nom}`);
  const corps = encodeURIComponent(
    `Nom : ${nom}\nEmail : ${email}\nTéléphone : ${tel || 'non renseigné'}\n\nProjet :\n${message}`
  );

  window.location.href = `mailto:info@geodilex.be?subject=${sujet}&body=${corps}`;
});

const track = document.getElementById('projectsTrack');
const prevBtn = document.querySelector('.carousel-arrow--prev');
const nextBtn = document.querySelector('.carousel-arrow--next');

function scrollByCard(direction) {
  const card = track.querySelector('.project-card');
  const cardWidth = card.getBoundingClientRect().width;
  const gap = 24;
  track.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' });
}

prevBtn.addEventListener('click', () => scrollByCard(-1));
nextBtn.addEventListener('click', () => scrollByCard(1));

function updateArrowState() {
  const maxScroll = track.scrollWidth - track.clientWidth;
  prevBtn.disabled = track.scrollLeft <= 0;
  nextBtn.disabled = track.scrollLeft >= maxScroll - 1;
}

track.addEventListener('scroll', updateArrowState);
window.addEventListener('resize', updateArrowState);
updateArrowState();