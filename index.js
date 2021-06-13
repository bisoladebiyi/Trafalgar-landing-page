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
  slider.scrollTo(slidePosition, 0);
  currentSlide = nextSlide;
};

// const showMenu = () => {
//   let menu = document.getElementById("menu");

//   if (menu.style.opacity == 0) {
//     menu.setAttribute("style", "opacity: 1;");
//   } else menu.setAttribute("style", "opacity: 0;");
// };

// let slides = [...document.querySelectorAll(".testimonial")];
// let currentSlide = 0;
// const nextSlide = () => {
//   // move current slide to the left
//   // move next slide to the left
//   const nextSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
//   if (nextSlide === 0) {
//     [...slides].reverse().forEach((slide, index) => {
//       if (index === slides.length - 1) {
//         slide.classList.add("active");
//       } else {
//         slide.classList.remove("active");
//         slide.classList.remove("slide-out-left");
//       }
//     });
//   } else {
//     slides[currentSlide].classList.add("slide-out-left");
//     slides[currentSlide].classList.remove("active");
//     slides[nextSlide].classList.add("active");
//   }

//   currentSlide = nextSlide;
// };

// const prevSlide = () => {
//   const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;

//   if (prevSlide === slides.length - 1) {
//     [...slides].reverse().forEach((slide, index) => {
//       if (index === 0) {
//         slide.classList.add("active");
//       } else {
//         slide.classList.remove("active");
//         slide.classList.remove("slide-out-right");
//         slide.classList.add("slide-out-left");

//       }
//     });
//   } else {
//     slides[currentSlide].classList.add("slide-out-right");
//     slides[currentSlide].classList.remove("active");
//     slides[prevSlide].classList.add("active");
//   }

//   currentSlide = prevSlide;
// };

// // radios.forEach((radio, index) => {
// //     radio.addEventListener("click", () => {
// //        if(index===currentSlide) {
// //            slides[currentSlide].classList.add("active")
// //            radio.classList.add("active")
// //            currentSlide++
// //        }
// //        else {

// //        }
// //     })
// // })
