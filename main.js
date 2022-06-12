"use strict";

//ANIMATION
window.addEventListener("load", function () {
  AOS.init();
});
/*
// SCROLL NAVIGATION (FIXED NAVIGATION)
const section1 = document.getElementById("section-1");
const nav = document.querySelector(".nav");
const initialCoords = section1.getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (this.window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
*/

// MORE ABOUT US (VISE O NAMA) SCROLL TO SECTION
const section1 = document.getElementById("section-1");
const btnScrollTo = document.querySelector(".btn-scroll-to");

btnScrollTo.addEventListener("click", function (e) {
  const section1Coords = section1.getBoundingClientRect();
  section1.scrollIntoView({ behavior: "smooth" });
});
