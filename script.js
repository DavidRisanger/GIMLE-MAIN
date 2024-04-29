window.addEventListener("DOMContentLoaded", function () {
  showSection("drikke"); // Viser drikke-seksjonen som standard
});

// Lytter til scrolling-hendelser
window.addEventListener("scroll", function () {
  scrollFunction();
});

// Funksjon for å håndtere scrolling
function scrollFunction() {
  var aboutSection = document.getElementById("about-section");
  var arrangementerSection = document.querySelector(".arrangementer");
  var aboutSectionPosition = aboutSection.getBoundingClientRect().top;
  var arrangementerSectionPosition =
    arrangementerSection.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  // Sjekker om about-seksjonen er synlig i viewporten
  if (aboutSectionPosition < screenHeight * 0.75) {
    aboutSection.classList.add("active");
  } else {
    aboutSection.classList.remove("active");
  }

  // Sjekker om arrangementer-seksjonen er synlig i viewporten
  if (arrangementerSectionPosition < screenHeight * 0.75) {
    arrangementerSection.classList.add("active");
  } else {
    arrangementerSection.classList.remove("active");
  }

  // Resten av din eksisterende kode for å vise tilbake-til-topp-knappen
}

// Funksjon for å vise riktig seksjon basert på valgt alternativ
function showSection(sectionName) {
  var foodSection = document.getElementById("matMeny");
  var drinkSection = document.getElementById("drikkeMeny");

  if (sectionName === "drikke") {
    foodSection.style.display = "none";
    drinkSection.style.display = "block";
  } else if (sectionName === "mat") {
    foodSection.style.display = "block";
    drinkSection.style.display = "none";
  }
}
