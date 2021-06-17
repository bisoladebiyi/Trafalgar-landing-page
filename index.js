let currentSlide = 0;
let radios = [...document.querySelectorAll(".radio-buttons")];
let slides = [...document.querySelectorAll(".testimonial-container")];
let slider = document.querySelector(".testimonials");
let next = document.querySelector(".next-slide");
let prev = document.querySelector(".prev-slide");

radios.forEach((radio, index) => {
  radio.addEventListener("click", () => {
    radios[currentSlide].classList.remove("active");
    radios[index].classList.add("active");
    moveSlide(index);
  });
});

next.addEventListener("click", () => {
  const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

  moveSlide(nextSlide);
});

prev.addEventListener("click", () => {
  const nextSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

  moveSlide(nextSlide);
});

window.addEventListener("resize", () => {
  slider.style["scroll-behavior"] = "auto";
  moveSlide(currentSlide);
  slider.style["scroll-behavior"] = "smooth";
});

const moveSlide = (nextSlide) => {
  const slidePosition = nextSlide * slides[0].clientWidth;
  // slider.scrollTo(slidePosition, 0);
  SmoothHorizontalScrolling(slider, 500, slidePosition - slider.scrollLeft, slider.scrollLeft)
  currentSlide = nextSlide;
};

const showMenu = () => {
  let menu = document.getElementById("menu");
  let hamburger = document.querySelector(".hamburger");
  let close = document.querySelector(".close");

  if (menu.style.opacity == 0) {
    menu.setAttribute("style", "opacity: 1;");
    hamburger.classList.add("hide");
    close.classList.add("show");
  } else {
    close.classList.remove("show");
    hamburger.classList.remove("hide");
    menu.setAttribute("style", "opacity: 0;");
  }
};


function SmoothHorizontalScrolling(e, time, amount, start) {
  var eAmt = amount / 100;
  var curTime = 0;
  var scrollCounter = 0;
  while (curTime <= time) {
      window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start);
      curTime += time / 100;
      scrollCounter++;
  }
}

function SHS_B(e, sc, eAmt, start) {
  e.scrollLeft = (eAmt * sc) + start;
}
