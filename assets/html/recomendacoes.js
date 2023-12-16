'use strict';

/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


// slider 1

const introSlider = document.querySelector("[data-slider-intro]");
const introSliderContainer = document.querySelector("[data-slider-container-intro]");
const introSliderPrevBtn = document.querySelector("[data-slider-prev-intro]");
const introSliderNextBtn = document.querySelector("[data-slider-next-intro]");

let introTotalVisibleItems = Number(getComputedStyle(introSlider).getPropertyValue("--slider-items"));
let introTotalSlidableItems = introSliderContainer.childElementCount - introTotalVisibleItems;

let introCurrentSlidePos = 0;

const introMoveSliderItem = function () {
  introSliderContainer.style.transform = `translateX(-${introSliderContainer.children[introCurrentSlidePos].offsetLeft}px)`;
}

const introSlideNext = function () {
  const introSlideEnd = introCurrentSlidePos >= introTotalSlidableItems;

  if (introSlideEnd) {
    introCurrentSlidePos = 0;
  } else {
    introCurrentSlidePos++;
  }

  introMoveSliderItem();
}

const introSlidePrev = function () {
  if (introCurrentSlidePos <= 0) {
    introCurrentSlidePos = introTotalSlidableItems;
  } else {
    introCurrentSlidePos--;
  }

  introMoveSliderItem();
}

introSliderNextBtn.addEventListener("click", introSlideNext);
introSliderPrevBtn.addEventListener("click", introSlidePrev);

window.addEventListener("resize", function () {
  introTotalVisibleItems = Number(getComputedStyle(introSlider).getPropertyValue("--slider-items"));
  introTotalSlidableItems = introSliderContainer.childElementCount - introTotalVisibleItems;

  introMoveSliderItem();
});

// slider 2

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});


// slider 3

const astroSlider = document.querySelector("[data-slider-astro]");
  const astroSliderContainer = document.querySelector("[data-slider-container-astro]");
  const astroSliderPrevBtn = document.querySelector("[data-slider-prev-astro]");
  const astroSliderNextBtn = document.querySelector("[data-slider-next-astro]");

  let astroTotalVisibleItems = Number(getComputedStyle(astroSlider).getPropertyValue("--slider-items"));
  let astroTotalSlidableItems = astroSliderContainer.childElementCount - astroTotalVisibleItems;

  let astroCurrentSlidePos = 0;

  const astroMoveSliderItem = function () {
    astroSliderContainer.style.transform = `translateX(-${astroSliderContainer.children[astroCurrentSlidePos].offsetLeft}px)`;
  }

  const astroSlideNext = function () {
    const astroSlideEnd = astroCurrentSlidePos >= astroTotalSlidableItems;

    if (astroSlideEnd) {
      astroCurrentSlidePos = 0;
    } else {
      astroCurrentSlidePos++;
    }

    astroMoveSliderItem();
  }

  const astroSlidePrev = function () {
    if (astroCurrentSlidePos <= 0) {
      astroCurrentSlidePos = astroTotalSlidableItems;
    } else {
      astroCurrentSlidePos--;
    }

    astroMoveSliderItem();
  }

  astroSliderNextBtn.addEventListener("click", astroSlideNext);
  astroSliderPrevBtn.addEventListener("click", astroSlidePrev);

  window.addEventListener("resize", function () {
    astroTotalVisibleItems = Number(getComputedStyle(astroSlider).getPropertyValue("--slider-items"));
    astroTotalSlidableItems = astroSliderContainer.childElementCount - astroTotalVisibleItems;

    astroMoveSliderItem();
  });

  // slider 4

  const psiSlider = document.querySelector("[data-slider-psi]");
  const psiSliderContainer = psiSlider.querySelector("[data-slider-container-psi]");
  const psiSliderPrevBtn = document.querySelector("[data-slider-prev-psi]");
  const psiSliderNextBtn = document.querySelector("[data-slider-next-psi]");

  let psiTotalVisibleItems = Number(getComputedStyle(psiSlider).getPropertyValue("--slider-items"));
  let psiTotalSlidableItems = psiSliderContainer.childElementCount - psiTotalVisibleItems;

  let psiCurrentSlidePos = 0;

  const psiMoveSliderItem = function () {
    psiSliderContainer.style.transform = `translateX(-${psiSliderContainer.children[psiCurrentSlidePos].offsetLeft}px)`;
  }

  const psiSlideNext = function () {
    const psiSlideEnd = psiCurrentSlidePos >= psiTotalSlidableItems;

    if (psiSlideEnd) {
      psiCurrentSlidePos = 0;
    } else {
      psiCurrentSlidePos++;
    }

    psiMoveSliderItem();
  }

  const psiSlidePrev = function () {
    if (psiCurrentSlidePos <= 0) {
      psiCurrentSlidePos = psiTotalSlidableItems;
    } else {
      psiCurrentSlidePos--;
    }

    psiMoveSliderItem();
  }

  psiSliderNextBtn.addEventListener("click", psiSlideNext);
  psiSliderPrevBtn.addEventListener("click", psiSlidePrev);

  window.addEventListener("resize", function () {
    psiTotalVisibleItems = Number(getComputedStyle(psiSlider).getPropertyValue("--slider-items"));
    psiTotalSlidableItems = psiSliderContainer.childElementCount - psiTotalVisibleItems;

    psiMoveSliderItem();
  });

  // slider 5

  const literalSlider = document.querySelector("[data-slider-literal]");
  const literalSliderContainer = literalSlider.querySelector("[data-slider-container-literal]");
  const literalSliderPrevBtn = document.querySelector("[data-slider-prev-literal]");
  const literalSliderNextBtn = document.querySelector("[data-slider-next-literal]");

  let literalTotalVisibleItems = Number(getComputedStyle(literalSlider).getPropertyValue("--slider-items"));
  let literalTotalSlidableItems = literalSliderContainer.childElementCount - literalTotalVisibleItems;

  let literalCurrentSlidePos = 0;

  const literalMoveSliderItem = function () {
    literalSliderContainer.style.transform = `translateX(-${literalSliderContainer.children[literalCurrentSlidePos].offsetLeft}px)`;
  }

  const literalSlideNext = function () {
    const literalSlideEnd = literalCurrentSlidePos >= literalTotalSlidableItems;

    if (literalSlideEnd) {
      literalCurrentSlidePos = 0;
    } else {
      literalCurrentSlidePos++;
    }

    literalMoveSliderItem();
  }

  const literalSlidePrev = function () {
    if (literalCurrentSlidePos <= 0) {
      literalCurrentSlidePos = literalTotalSlidableItems;
    } else {
      literalCurrentSlidePos--;
    }

    literalMoveSliderItem();
  }

  literalSliderNextBtn.addEventListener("click", literalSlideNext);
  literalSliderPrevBtn.addEventListener("click", literalSlidePrev);

  window.addEventListener("resize", function () {
    literalTotalVisibleItems = Number(getComputedStyle(literalSlider).getPropertyValue("--slider-items"));
    literalTotalSlidableItems = literalSliderContainer.childElementCount - literalTotalVisibleItems;

    literalMoveSliderItem();
  });

  // slider 5

  const mangaSlider = document.querySelector("[data-slider-manga]");
  const mangaSliderContainer = mangaSlider.querySelector("[data-slider-container-manga]");
  const mangaSliderPrevBtn = document.querySelector("[data-slider-prev-manga]");
  const mangaSliderNextBtn = document.querySelector("[data-slider-next-manga]");

  let mangaTotalVisibleItems = Number(getComputedStyle(mangaSlider).getPropertyValue("--slider-items"));
  let mangaTotalSlidableItems = mangaSliderContainer.childElementCount - mangaTotalVisibleItems;

  let mangaCurrentSlidePos = 0;

  const mangaMoveSliderItem = function () {
    mangaSliderContainer.style.transform = `translateX(-${mangaSliderContainer.children[mangaCurrentSlidePos].offsetLeft}px)`;
  }

  const mangaSlideNext = function () {
    const mangaSlideEnd = mangaCurrentSlidePos >= mangaTotalSlidableItems;

    if (mangaSlideEnd) {
      mangaCurrentSlidePos = 0;
    } else {
      mangaCurrentSlidePos++;
    }

    mangaMoveSliderItem();
  }

  const mangaSlidePrev = function () {
    if (mangaCurrentSlidePos <= 0) {
      mangaCurrentSlidePos = mangaTotalSlidableItems;
    } else {
      mangaCurrentSlidePos--;
    }

    mangaMoveSliderItem();
  }

  mangaSliderNextBtn.addEventListener("click", mangaSlideNext);
  mangaSliderPrevBtn.addEventListener("click", mangaSlidePrev);

  window.addEventListener("resize", function () {
    mangaTotalVisibleItems = Number(getComputedStyle(mangaSlider).getPropertyValue("--slider-items"));
    mangaTotalSlidableItems = mangaSliderContainer.childElementCount - mangaTotalVisibleItems;

    mangaMoveSliderItem();
  });


  // scroll efeito

  const sections = document.querySelectorAll("[data-section]");

  const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].getBoundingClientRect().top;
      const sectionHeight = sections[i].offsetHeight;
  
      const visibilityThreshold = 1;
  
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