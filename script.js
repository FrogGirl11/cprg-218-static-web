const accordion = document.getElementsByClassName("accordion");
let i;

function toggleAccordion(header) {
  header.classList.toggle('active');
  var icon = header.querySelector('.accordion-icon');
  icon.textContent = icon.textContent === '+' ? '-' : '+';
}
/*I'm so sorry Stephen I can't get this accordion to work :,(*/
