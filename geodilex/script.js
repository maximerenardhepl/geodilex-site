

const element = document.getElementById('hero-title');
const texte = element.textContent; // récupère le texte déjà présent
element.textContent = ''; // on vide pour réécrire lettre par lettre
let i = 0;

function ecrireTitre(){
  if(i < texte.length){

    element.textContent += texte.charAt(i);
    i++;
    setTimeout(ecrireTitre, 60);

  }
}

window.addEventListener('DOMContentLoaded', ecrireTitre);