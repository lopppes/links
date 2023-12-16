const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].getBoundingClientRect().top;
    const sectionHeight = sections[i].offsetHeight;

    const visibilityThreshold = 0.3;

    const revealPosition = window.innerHeight - sectionHeight * (1 - visibilityThreshold);

    if (sectionTop < revealPosition) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

window.addEventListener("scroll", scrollReveal);


/**
 * preloader
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});