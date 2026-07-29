


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